var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var csvApi = require('../controller/nameAPI.js')
var service = require('../service/dynamoDbDao.js')

router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
  csvApi.hello(req, res);
});

router.post('/name_url', function(req, res) {
  service.addToTable(req.body.param_name, req.body.param_email);
  res.redirect('/');
});

router.get('/create_table', function(req, res, next) {
  service.createTable(req, res);
});

router.post('/lookup_url', function(req, res) {
  service.lookupFromTable(req.body.param_lookup_name, res)
});

router.get('/delete_table', function(req, res, next) {
  service.deleteTable();
  res.redirect('/');
});

module.exports = router;
