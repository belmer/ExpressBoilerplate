var express = require('express');
var router = express.Router();

// save to zoho
var zoho = require('./zoho')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index',{title:'Liquipel Protection Technology'});
});


// **************** POST

router.post('/zoho',  zoho.insert);

module.exports = router;
