using Marten;
using System.Text.Json.Serialization;
using TodosApi;
using TodosApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var dataConnectionString = builder.Configuration.GetConnectionString("todos") ?? throw new Exception("Need a database connection string");
Console.WriteLine($"Using the connection string {dataConnectionString}");
builder.Services.AddMarten(options =>
{
    options.Connection(dataConnectionString);
    options.AutoCreateSchemaObjects = Weasel.Core.AutoCreate.All;
});

builder.Services.AddTransient<IManageTheTodoListCatalog, MartenTodolistCatalog>();

// Avoid CORS error
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(pol =>
    {
        pol.AllowAnyOrigin();
        pol.AllowAnyMethod();
        pol.AllowAnyHeader();
    });
});

// Everything above this line is configuring "Services" in our application -----------
var app = builder.Build();

// Below is configuring "middleware" - sees the incoming HTTP request and makes response
app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();  // This is OpenAPI - generates documentation (JSON file called "Swagger" file)
    app.UseSwaggerUI(); // Adds middleware, lets you interact with that documentation
}

app.UseAuthorization();

app.MapControllers();

app.Run(); // starts Kestrel web server and listens for request
