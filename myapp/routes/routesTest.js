/*var routes = require("express").Router();

var routeTestCtrl = require("../controllers/routesTest")
var testController = require('../controllers/routesTest');

routes.get('/test', routeTestCtrl.getTest);

module.exports = routes

var router = express.Router();


module.exports = router;
*/

var express = require('express');
var router = express.Router();   

var testController = require('../controllers/routesTest');

router.get('/test', testController.getTest);
router.post('/test', testController.postTest);
router.get('/saludo/:nombre', testController.getSaludo);

module.exports = router;