var express = require('express');
var router = express.Router();
var csvApi = require('../controller/csvApi')

/* GET home page. */
router.get('/test', function(req, res, next) {
  csvApi.hello(req, res);
});

module.exports = router;
