var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild",
    "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecasts = Enumerable.Range(1, 10)
        .Select(index =>
        {
            var temperatureC = Random.Shared.Next(-20, 55);

            return new WeatherForecast(
                DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                temperatureC,
                summaries[Random.Shared.Next(summaries.Length)]
            );
        })
        .ToArray();

    return Results.Ok(forecasts);
});

app.MapFallbackToFile("/index.html");

app.Run();

internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
