namespace TodosApi;

public class StatusCycler : IProvideStatusCycling
{
    public TodoListItemResponseModel ProvideNextStatusFrom(TodoListItemResponseModel savedItem)
    {
        int currentStatus = (int)savedItem.status;
        TodoItemStatus[] statusArray = { TodoItemStatus.Later, TodoItemStatus.Now, TodoItemStatus.Waiting, TodoItemStatus.Completed };

        // get next number
        int newStatus = 0;
        if (currentStatus < 3)
        {
            newStatus = currentStatus + 1;
        }

        return savedItem with { status = statusArray[newStatus] };
    }

}