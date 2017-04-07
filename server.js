var http = require('http');
 var express = require('express');

 mongoose.connect('mongodb')


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

app.listen(5000);
console.log('api change toutes les a 5sec')