var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/findproduct', function(req, res) {
    var db = req.db;
    var collection = db.get('Products');
    collection.distinct('category',function(e,docs){
        console.log(docs.length);
        res.render('findproduct', { 
            "categorylist": docs
        });
    });
});

router.get('/products', function(req, res) {
    var selectCategory = req.query['category'];
    var txtSearch = req.query['txtsearch'];
    console.log(selectCategory);
    console.log(txtSearch);
    var db = req.db;
    var collection = db.get('Products');

    if(txtSearch!=="") {
        collection.find({$text:{$search:txtSearch}},function(e,docs){
            res.render('products', { 
            category:selectCategory,
            search:txtSearch,
            "productlist": docs
            })
        })
    }
    else {
        collection.find({category:selectCategory},function(e,docs){
            res.render('products', { 
            category:selectCategory,
            search:txtSearch,
            "productlist": docs
            })
        })
    }
    /*else{
        collection.find({category:selectCategory,$text:{$search:txtSearch}},function(e,docs){
            res.render('products', {
            category:selectCategory,
            search:txtSearch,
            "productlist": docs
            })
        })
    }
    collection.find({category:selectCategory},function(e,docs){
        res.render('products', { 
            "productlist": docs
        });
    });
});*/
});

module.exports = router;
