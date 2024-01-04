const { getGenres } = require("./controllers/genres.controllers");
const express = require("express");
const { getUsers, getUserById, patchUser, postUser } = require("./controllers/users.controllers");
const { getBookById, getBooks, postBook } = require("./controllers/books.controllers");
const { handleCustomErrors, handleServerErrors, handleMongoErrors } = require("./errors/errors");
const app = express();

app.use(express.json());

app.get("/api/users", getUsers);

app.get("/api/users/:user_id", getUserById);
app.patch("/api/users/:user_id", patchUser);

app.post("/api/users", postUser)

app.get("/api/books", getBooks);

app.get("/api/books/:id", getBookById);

app.post('/api/books', postBook)

app.get("/api/genres", getGenres);

app.use(handleMongoErrors)
app.use(handleCustomErrors);
app.use(handleServerErrors);



module.exports = app;
