using Marten;



namespace TodosApi.Services;



public class MartenTodolistCatalog : IManageTheTodoListCatalog
{
    private readonly IDocumentSession _session;
    private readonly IProvideStatusCycling _statusCycler;


    public MartenTodolistCatalog(IDocumentSession session, IProvideStatusCycling statusCycler)
    {
        _session = session;
        _statusCycler = statusCycler;
    }



    public async Task<TodoListItemResponseModel> AddTodoItemAsync(TodoListCreateModel request)
    {
        var response = new TodoListItemResponseModel(Guid.NewGuid(), request.Description, TodoItemStatus.Later);

        _session.Store(response);
        await _session.SaveChangesAsync(); // may take 5-1300 ms
        return response;
    }

    public async Task<TodoListItemResponseModel?> ChangeStatusAsync(TodoListItemRequestModel request)
    {
        // check the database for the item, if it's not there, return null
        var savedItem = await _session
            .Query<TodoListItemResponseModel>()
            .Where(t => t.Id == request.Id).SingleOrDefaultAsync();
        if (savedItem == null)
        {
            return null;
        }

        // Change the status of the thing
        TodoListItemResponseModel updated = _statusCycler.ProvideNextStatusFrom(savedItem);

        // Save it in the database
        _session.Store(updated);
        await _session.SaveChangesAsync();

        // return the saved thing back
        return updated;
    }


    public async Task<CollectionResponse<TodoListItemResponseModel>> GetFullListAsync()
    {
        var response = await _session.Query<TodoListItemResponseModel>().ToListAsync();
        return new CollectionResponse<TodoListItemResponseModel>(response);
    }
}
