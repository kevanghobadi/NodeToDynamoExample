var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var csvApi = require('../controller/nameAPI.js')

router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/test', function(req, res, next) {
  csvApi.hello(req, res);
});

router.post('/name_url', function(req, res) {
  res.send('You sent the name: "' + req.body.param_name + '".');
});

module.exports = router;
