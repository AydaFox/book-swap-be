# Cluster Books Back-end Server

## Link to the API on Render

Make requests to [Cluster Books API](https://cluster-books-api.onrender.com/api).

Follow the link above to view all the available endpoints of the api.

## About

This is part of a group project to create a book swapping app. This server is designed to allow for users to log in, post books they want to share, search for books from other users and store messages between users.

## How to Setup and Run Locally

Follow these steps in your terminal:

1. Clone the GitHub repo
   - `git clone https://github.com/AydaFox/ayda-news-server.git`
2. Install all dependencies required for the project to run
   - `npm install`
3. Create 2 files in the root directory for the environment variables
   - **.env.development**
   - **.env.test**
4. Add the database names to the appropriate file
   - to **.env.development** add  `DATABASE_URL=mongodb://localhost/booksdevelopment` 
   - to **.env.test** add  `DATABASE_URL=mongodb://localhost/bookstest` 
5. Install MongoDB Community Edition to setup a local database
   - go to the [MongoDB docs](https://www.mongodb.com/docs/manual/administration/install-community/) and follow the instructions for your OS to get started
6. Create and seed a local database
   - `npm run setup-dbs`
   - `npm run seed`

Please ensure you have installed:
- node v16 or later
- node-pg v8.2 or later
