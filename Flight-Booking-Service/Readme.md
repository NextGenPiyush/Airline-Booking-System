This is a Base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

'src' --> inside the src folder all the actual source code regarding the project will reside, this will not include any kind of test (you might want to make separate test folder)

lets take a look inside the source folder:

-- 'config' --> in this folder anything and everything regarding any configurations or setup of a library or module will be done. 
    ex: setting up .env so that we can use environment variables in a cleaner fashion. This is done in the 'server-config.js' file.
    ex: can be setup you logging library that can help you to prepare meaningful logs, so configuration for this library for this library should also be done here.

-- 'routes' --> in the route folder we register a route and the corresponding middleware and controller to it.

-- 'Middlewares' --> the are just going to inserc the incomming request where we can write our validators and authenticators

-- `controllers` --> the are kind of last middlewares as post them you call your bussiness layer to execute the bussiness logic. In controllers we just receive the incoming requests and the data and then passes it to the bussiness layer, and ones bussiness layer returns an output, we structure the API response in controllers and send the output.

-- `Repositories` --> this folder contains all the logic using which we interact with Database by writing queries, all the raw queries or ORM queries will go here.

-- `Services` --> services contains the bussiness logic and interact with repositories for the data from the database.

-- `Utils` --> utils contains helper methods and error classes, etc. 



### Setup the project

-- Download this template from githuband open it in your editor.

-- go inside the folder path and execute the following command:
    npm install

-- in the root directory creat a `.env` file and add the following environment variables
    PORT = <port number of your choise>

-- go inside the `src` folder and run the following command:
    npx sequelize init
- By Executing the above command you will get migration and seeders folder along with config.json file in config folder.

if you are setting up your development environment, then write the username of your database, password of the database and in dialect mention whatever database you are using.
If you are setting up test or production environment make sure you also replace the host with the hosted database url.

-- to run the server execute 
    npm run dev

