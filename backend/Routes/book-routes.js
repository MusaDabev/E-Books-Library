const express = require('express');
const Book = require('../Model/Book.js');
const booksController = require('../Controllers/book-controller.js');

const router = express.Router();

router.get('/', booksController.getAllBooks);
router.post('/', booksController.addBook);
router.get('/:id', booksController.getById);
router.put('/:id', booksController.updateBook)
router.delete('/:id', booksController.deleteBook)


module.exports = router;
