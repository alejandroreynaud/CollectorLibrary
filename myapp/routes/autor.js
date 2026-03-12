var express = require('express');
var router = express.Router();

var authorsCtrl = require('../controllers/autor');

router.get('/', authorsCtrl.getAuthors);
router.post('/', authorsCtrl.createAuthor);

module.exports = router;