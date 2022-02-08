/* eslint linebreak-style: ["error", "windows"] */
const {
  addBookHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  editBookbyIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

/* eslint no-multiple-empty-lines: "error" */
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookbyIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
