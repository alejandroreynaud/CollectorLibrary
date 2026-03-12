var express = require('express');
var router = express.Router();

var booksCtrl = require('../controllers/books');

router.get('/books/:isbn', booksCtrl.getBookByISBN);
router.post('/books', booksCtrl.createBook);

module.exports = router;