using System.ComponentModel.DataAnnotations;

namespace TodosApi.Models;

public enum TodoItemStatus { Later, Now, Waiting, Completed }

public record TodoListItemResponseModel(Guid Id, string Description, TodoItemStatus status);

public record TodoListItemRequestModel
{
    [Required]
    public Guid? Id { get; set; }
    [Required, MaxLength(100)]
    public string Description { get; set; } = string.Empty;
    [Required]
    public TodoItemStatus? Status { get; set; }
}

public record TodoListCreateModel
{
    [Required, MaxLength(100)] // doesn't do anything really, check rules elsewhere
    public string Description { get; set; } = string.Empty;
}