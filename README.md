# Node Authentication Flow Poc
Create the .env file in root directory by taking a reference of .env.example file.

Please create a database in MongoDB and use its path in DB_URI field in .env file.

## Installation

Install the dependencies and devDependencies after creating .env file and start the server.

```sh
git clone https://github.com/DevashishSuthar/Login-Poc.git
cd Login-Poc
npm i
npm start
```

## Postman Environment Variables Quick Start:-

To try out a variable, use the following steps:

1. Click the Environment quick look (eye button) in the top right of Postman and click Edit next to Globals.
2. Add a variable named URL and give it an initial value of your url, In my case the value of URL is http://localhost:8105/api/v1 then Save and close the environment modal.
3. Send the request. In the response, you'll see that Postman sent the variable value to the API. Try changing the value in the Environment quick look and sending the request again.

> Note: `I have add description in all apis in postman, you can check for the requirement parameters and response codes.`


## Postman Collection Link :- https://www.getpostman.com/collections/4e24090561cf0ed71ea9
