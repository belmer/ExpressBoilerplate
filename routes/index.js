var express = require('express');
var router = express.Router();

// save to zoho
var zoho = require('./zoho')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index',{title:'Liquipel Protection Technology'});
});


module.exports = router;
