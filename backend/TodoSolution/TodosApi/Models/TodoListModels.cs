using System.ComponentModel.DataAnnotations;

namespace TodosApi.Models;

public enum TodoItemStatus { Later, Now, Waiting, Completed }

public record TodoListItemResponseModel(Guid Id, string Description, TodoItemStatus status);

public record TodoListCreateModel
{
    [Required, MaxLength(100)] // doesn't do anything really, check rules elsewhere
    public string Description { get; set; } = string.Empty;
}