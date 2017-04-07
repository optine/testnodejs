var student = [];
var express = require('express');
var router = express.Router();

// MODELS
var product = require('../module/product')

// JS
router.get('/products', function(req, res){
	res.send('api is working');
});

module.exports = router;