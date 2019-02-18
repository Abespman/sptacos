var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());

app.listen(8000, function(){
    console.log('Running on port 8000');
})