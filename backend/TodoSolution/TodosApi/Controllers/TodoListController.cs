
namespace TodosApi.Controllers;

public class TodoListController : ControllerBase
{
    // GET /todo-list
    [HttpGet("/todo-list")]
    public async Task<ActionResult> GetTodoList()
    {
        var list = new List<TodoListItemResponseModel>
        {
            new TodoListItemResponseModel(Guid.NewGuid(), "Get Beer", TodoItemStatus.Now),
            new TodoListItemResponseModel(Guid.NewGuid(), "Clean Garage", TodoItemStatus.Waiting)
        };

        var response = new CollectionResponse<TodoListItemResponseModel>(list);

        return Ok(response);
    }
}
