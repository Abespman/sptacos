const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

mongoose.connect('mongodb://localhost/sptacos');

require('./server/config/mongoose.js');
require('./server/models/model.js');
require('./server/config/routes.js');

app.listen(8000, function() {
    console.log('Listening on port 8000.');
});