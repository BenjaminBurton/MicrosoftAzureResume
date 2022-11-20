# Microsoft Azure Resume

![Resume](https://img.shields.io/badge/Resume-UnderConstruction-red) ![Visits](https://img.shields.io/badge/Visits-Currently%20UK-blue)

:wave: :wave: :wave: :wave: :wave:

[Resume Coming Soon](https://www.lavellburton.net/) :star:

My Personal Azure Resume using resources found via tutorials, blogs and the Cloud Resume Challenge GuideBook

## Intro for project

Steps Involved: 
- [x] HTML: Write in HTML 
- [x] CSS: Style with CSS
- [x] Static Website: Deploy online using Azure Storage
- [x] HTTPS: URL should be HTTPS Azure CDN will help with this)
- [x] DNS: Point custom DNS Domain to CDN endpoint
- [x] JavaScript: Write JavaScript script to count visitors to site
- [x] Database: Retrieve and update count with Azure CosmosDB (serverless)
- [x] API: communicates with database | Azure Functions w/ HTTP trigger 
- [x] Python: Explore Python with Azure Functions
- [x] Test: Write test for Python Code 
- [x] IAC: Define Infrestructure as Code in Azure Resource Manager ARM (Consumption Plan)
- [x] Source Control: Use GitHub Actions Workflows
- [x] CI/CD (Backend): GitHub Actions Workflows Backend
- [x] CI/CD (Frontend): GitHub Actions Workflows Frontend
- [x] Blog Post: Hashnode


[My version of the code found Below](https://github.com/BenjaminBurton/MicrosoftAzureResume)
```js
https://github.com/BenjaminBurton/MicrosoftAzureResume

```
## Azure Account
- ✅ Create Azure Account

## GitHub Repo
- ✅ Create Github Repo An connect to laptop (git init)

## HTML & CSS
- ✅ Structured site with files and folders
- ✅ Coded Site In HTML & CSS 

## Azure Storage Account 
- ✅ Used Azure command line interface (CLI) 
- ✅ Storage account created successfully
- ✅ Deployed code to Azure static website

## HTTPS & CDN
- ✅ Created CDN endoint
- ✅ Turned on HTTPS for CDN endpoint

## DNS 
- ✅ Connected custom Domain name to CDN endpoint 
- ✅ Custom domain showing site successfully

## JavaScript
- ✅ Write a script that counts the number of visits to the site [script documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) also there is a really good resource by [Gwyn from A Cloud Guru](https://youtu.be/ieYrBWmkfno)
- ✅ Created .env file for calling variable 
## Database
- ✅ Created a database with cosmosDB.  
- ✅ Did a quick launch and added the database name and container.
- ✅ Items in database setup successful

## API
- Do not communicate directly with CosmosDB from your Javascript code. Instead, you will need to create an API that accepts requests from your web app and communicates with the database. I suggest using Azure Functions with an HTTP trigger for this. They will be free or close to free for what we are doing.

## Python
- You will need to write a bit of code in the Azure Function; you could use more Javascript, but it would be better for our purposes to explore Python – a common language used in back-end programs and scripts – and its Azure SDK. Here is a good, free Python tutorial.

## Test 
- You should also include some tests for your Python code. Here are some resources on writing good Python tests.

## Infrastructure As Code (IaC)
- You should not be configuring your API resources – the Azure Function, the CosmosDB – manually, by clicking around in the Azure console. Instead, define them in an Azure Resource Manager (ARM) template on a Consumption plan. This is called “infrastructure as code” or IaC. It saves you time in the long run.

## Source Control
- You do not want to be updating either your back-end API or your front-end website by making calls from your laptop, though. You want them to update automatically whenever you make a change to the code. (This is called continuous integration and deployment, or CI/CD.) Create a GitHub repository for your backend code.

## CI/CD Backend
- Set up GitHub Actions such that when you push an update to your ARM template or Python code, your Python tests get run. If the tests pass, the ARM application should get packaged and deployed to Azure.

## CI/CD Frontend
- Create a second GitHub repository for your website code. Create GitHub Actions such that when you push new website code, the Azure Storage blob automatically gets updated. (You may need to purge your Azure CDN endpoint in the code as well.) Important note: DO NOT commit Azure credentials to source control! Bad hats will find them and use them against you!

## Blog Post
- Write about experience to Blog site HashNode