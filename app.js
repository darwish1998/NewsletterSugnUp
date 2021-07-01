
//jshint esversion:7
/* eslint quotes: ["error", "double"], curly: 2 */

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.get("/", function(req, res) {

  res.sendFile(__dirname + "/signup.html");


});

app.post("/", function(req , res){

    var firstname = req.body.FName;
    var lastname = req.body.LName;
    var email = req.body.email;

    console.log(firstname , lastname, email);


});


app.listen(3000, function () {

  console.log(' Server is running on port 3000');


});

//API Key
// 89eef207a58f636d5e541153726a2d3c-us6

// ID List
// 4c7fefd674
