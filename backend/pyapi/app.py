import os 
import json
from azure.cosmos import CosmosClient, PartitionKey

endpoint = os.environ["COSMOS_ENDPOINT"]
key = os.enviorn["COSMOS_KEY"]
client = CosmosClient(url=endpoint, credential=key)
database = client.create_database_if_not_exist(id="cosmicworks")

partitionKeyPath = PartitionKey(path="/categoryId")

container = database.create_container_if_not_exists(
    id="products", partition_key=partitionKeyPath, offer_throughput=400
)


newItem = {
    "id": "70b63682-b93a-4c77-aad2-65501347265f",
    "categoryId": "61dba35b-4f02-45c5-b648-c6badc0cbd79",
    "categoryName": "gear-surf-surfboards",
    "name": "Yamba Surfboard",
    "quantity": 12,
    "sale": False,
}

container.create_item(newItem)

existingItem = container.read_item(
    item="70b63682-b93a-4c77-aad2-65501347265f",
    partition_key="61dba35b-4f02-45c5-b648-c6badc0cbd79",
)