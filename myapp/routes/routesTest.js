var express = require('express');
var router = express.Router();

var testController = require('../controllers/routesTest');

router.get('/test', testController.getTest);
router.post('/test', testController.postTest);
router.get('/saludo/:nombre', testController.getSaludo);

module.exports = router;