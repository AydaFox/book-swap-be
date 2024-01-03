const { selectSingleBook, findBooks, deleteBookListing } = require("../models/books.models");

exports.getBookById = (req, res, next) => {
  const paramId = req.params.id;

  selectSingleBook(paramId)
    .then((result) => {
      res.status(200).send({ book: result });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getBooks = (req, res, next) => {
    const queries = req.query;
  
    findBooks(queries)
      .then((books) => {
        res.status(200).send({ books: books });
      })
      .catch(next);
  };

  exports.deleteBookListing = (req, res, next) => {
    const { book_id } = req.params;
    deleteBookListing( book_id )
    .then(() => {
        res.status(204).end();
    })
    .catch((err) => {
        console.log(err)
        next(err)
    })
}