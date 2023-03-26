# Real Time Todo

## About

This application intends to build a real time todo list using websockets.
This repository contains the backend code.

## Tech Stack

-   NodeJS
-   Express
-   Socket.io
-   PostgreSQL
-   Sequelize

## Installation

-   Clone the repository
-   Run `npm install` to install all the dependencies
-   Setup the postgres db by starting the postgres server and creating a database and setting migrations using the commands:
    -  `npx sequelize-cli db:migrate`
-   Run `npm start` to start the server

## API

-   `GET /todos` - Get all the todos
-   `POST /todos` - Create a new todo
-   `PUT /todos/:id` - Update a todo
-   `DELETE /todos/:id` - Delete a todo

## DOCUMENTATION

The documentation is built using JSdoc and can be found in the `docs` folder.


