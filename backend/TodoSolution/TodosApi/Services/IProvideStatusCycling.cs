namespace TodosApi;

public interface IProvideStatusCycling
{
    TodoListItemResponseModel ProvideNextStatusFrom(TodoListItemResponseModel savedItem);
}