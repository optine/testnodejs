var http = require('http');
 var express = require('express');

 mongoose.connect('mongodb')


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./js/list'));

app.listen(5000);
console.log('api tourne toutes les 5sec')