# React-Crud-APP
We are going to build a simple application where user can  enter their name and email view their name and email edit and update their name and email delete their name and email

Building a CRUD (Create, Read, Update, Delete) application in React.js using Axios involves creating an application that interacts with a backend API to perform these basic operations on some data. Here's a step-by-step guide on how to build a simple CRUD application using React.js and Axios:

1. Setup Your React Project:
Set up a new React project using Create React App or any other method you prefer.
npx create-react-app react-crud-app
cd react-crud-app

2. Install Axios:
Axios is a promise-based HTTP client for the browser and Node.js. Install Axios using npm or yarn.
npm install axios
Create Components:

3. Create components for each CRUD operation (Create, Read, Update, Delete).

Implement CRUD Operations:

==> Create Operation:
Create a form component to input data and send a POST request to the backend API.

==> Read Operation:
Fetch data from the backend API using a GET request and display it in a component.

==> Update Operation:
Create a form pre-populated with existing data. Send a PUT request to update the data on the server.

==> Delete Operation:
Send a DELETE request to the backend API to remove data.

==> Define API Endpoints:
Define the endpoints for each CRUD operation in your backend API. These endpoints should handle the respective HTTP methods (POST, GET, PUT, DELETE) for each operation.

4. Handle State and Data Management:
Manage the application state using React's state or context API. Update the UI based on changes in the application state.

screenshots:


Create 

![image](https://github.com/parikhpreksha/React-Crud-APP/assets/88531258/e60c0574-5ee2-4084-99db-6a03df911e99)

Read

lightmode:

![image](https://github.com/parikhpreksha/React-Crud-APP/assets/88531258/75f1486e-7da3-4d9a-aa9c-c543cf5c70ce)


Darkmode
![image](https://github.com/parikhpreksha/React-Crud-APP/assets/88531258/df13ff3a-8de1-495b-8d03-408d67c81526)

Update

![image](https://github.com/parikhpreksha/React-Crud-APP/assets/88531258/9cf5c482-f905-44bf-b833-f2b9917056b8)


