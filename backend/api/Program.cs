// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
using Azure.Data.Tables;

// New instance of the TableClient class
TableServiceClient tableServiceClient = new TableServiceClient(Environment.GetEnvironmentVariable("COSMOS_CONNECTION_STRING"));

// New instance of TableClient class referencing the server-side table
TableClient tableClient = tableServiceClient.GetTableClient(
    tableName: "adventureworks"
);

await tableClient.CreateIfNotExistsAsync();