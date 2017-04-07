//Dependencies
var restful = require('node-restful');
var mongoose = restful.moongoose;

//Schema
var produtSchema = new mongoose.Schema({
	first name: string;
	last name: string,
	score: number
});

// Return studentlist
mosule.exports = restful.model('Products', productSchema);