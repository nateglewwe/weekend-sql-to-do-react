# Weekend SQL To-Do List Test App

This repo is for creating an app to combine all of the coding skills I've learned so far as a test of my coding ability, to see if I can create a simple full-stack app. There's a basic client interface, server-side, and database for creating and editing a to-do list like a basic app. This repo also serves as a model for how to create another self-test repo for learning another coding language in the future.

## Getting Started

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org)
- [Nodemon](https://nodemon.io)
- And the dependencies listed in `package.json`

## Create Database and Tables

Use the code in the `database.sql` file to create the initial database, tables, and test data for the app

## Development Setup Instructions

- Run `npm install`.
    - Be sure to take stock of `package.json` to see which dependencies you'll need to add.

- Start postgres if not running already by using opening up the [Postgres.app](https://postgresapp.com), or if using [Homebrew](https://brew.sh) you can use the command `brew services start postgresql`.
- Run `npm run server` to start the server.
- Run `npm run client` to start the client.
- Navigate to `localhost:5001`.

## Built With

- [React] (https://react.dev/) - JavaScript Library
- [Node.js] (https://nodejs.org/en) - Server Runtime Environment
- [Express.js] (https://expressjs.com/) - Web Framework

This version uses React, Node, Express, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Authors

* **Nathaniel Glewwe** - *Initial work* - [GitHub Page](https://github.com/nateglewwe)

## Acknowledgements

- Prime Digital Academy, particularly Myron Schippers, Carlos Kelley, Chris Black, and all my Titanite cohort classmates
- Hawken Rives