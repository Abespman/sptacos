const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/publc/dist/public"));

app.listen(8000, function() {
    console.log("Listening on port 8000.");
});