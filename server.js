const express = require("express");
const app = espres();
const app = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.user(express.static(--dirname + "public/dist/public"));

app.listen(8000, function(){
    console.log("Listening on port 8000")
});