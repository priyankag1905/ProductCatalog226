var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/product', function(req, res) {
  var db = req.db;
  var collection = db.get('testData');
  collection.find({},{},function(e,docs){
  	res.render('productlist', {
  		"productlist" : docs
  	});
  });
});

module.exports = router;
