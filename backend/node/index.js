// Get environment variable from .env
import * as dotenv from "dotenv";
dotenv.config();

// Uniquenes for databases and container
const timeStamp = +new Date();

// Set Database name and container name with unique timestamp
const databaseName = `contoso_${timeStamp}`;
const containerName = `products_${timeStamp}`;
const partitionKeyPath = ["/categoryName"];

// Authenticate to Azure Cosmos DB
const cosmosClient = new CosmosClient({ endpoint, key });

// Create database if it doesn't exist
const { database } = await cosmosClient.databases.createIfNotExists({
  id: database,
});
console.log(`${database.id} database ready`);

// Create Container if it doesn't exist
const { container } = await database.containers.createIfNotExists({
  id: containerName,
  partitionKey: {
    paths: partitionKeyPath,
  },
});
console.log(`${container.id} container ready`);

import { CosmosClient } from "@azure/cosmos";

// Provide required connection from environment variables
const key = process.env.COSMOS_KEY;
// Endpoint format: https://YOUR-RESOURCE-NAME.documents.azure.com:443
const endpoint = process.env.COSMOS_ENDPOINT;
