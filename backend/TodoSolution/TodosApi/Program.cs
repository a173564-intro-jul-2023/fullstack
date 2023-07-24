using System.Text.Json.Serialization;

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

// Everything above this line is configuring "Services" in our application -----------
var app = builder.Build();

// Below is configuring "middleware" - sees the incoming HTTP request and makes response

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();  // This is OpenAPI - generates documentation (JSON file called "Swagger" file)
    app.UseSwaggerUI(); // Adds middleware, lets you interact with that documentation
}

app.UseAuthorization();

app.MapControllers();

app.Run(); // starts Kestrel web server and listens for request
