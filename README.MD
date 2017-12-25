The goal of this repo is to show how NodeJS can interact with an instance of dynamoDB. I use an express application for learning, and to demonstrate rest endpoints that can control dynamo db. 

Setup:

0. Install nodeJS and NPM
1. Pull the repo, in the root folder do a ```npm install```
2. Start up a local dynamo db at localhost port 8000, or change the value of var:endpoint in the dynamoDBDao.js to the dynamo instance you prefer
3. Start the server with a npm run devstart (default in the application is port 3000)
4. Create a dynamo table at: http://localhost:3000/create_table
5. Interact with the table at http://localhost:3000/ through the gui
6. Delete the table at http://localhost:3000/


Troubleshooting
- If you can not get Dynamo to connect I found it was generally a credentials issue. Per amazon a local file can be used:
The AWS credentials file – located at ~/.aws/credentials on Linux, macOS, or Unix, or at C:\Users\USERNAME \.aws\credentials on Windows. This file can contain multiple named profiles in addition to a default profile.
