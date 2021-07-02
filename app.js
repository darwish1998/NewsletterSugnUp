
//jshint esversion:7

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.get("/", function(req, res) {

  res.sendFile(__dirname + "/signup.html");


});

app.post("/", function(req , res){

    const firstname = req.body.FName;
    const lastname = req.body.LName;
    const email = req.body.email;

    const data = {
      members: [
        {
          email_address: email,
          status:"subscribed",
          merge_fields: {
            FNAME: firstname,
            LNAME: lastname,
          }

        }
      ]
    };

    const jsonData = JSON.stringify(data);


    const url =   "https://us6.api.mailchimp.com/3.0/lists/4c7fefd674"


        const options   = {

            method: "POST",
            auth:"darwish144:89eef207a58f636d5e541153726a2d3c-us6"

        }




    const request = https.request(url, options, function(response) {

    if (response.statusCode === 404) {

      res.sendFile(__dirname + "/success.html");

    }
    else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));


    })


})
request.write(jsonData);
request.end();


});

app.post("/failure", function(req,res){
  res.redirect("/");
})


app.listen(process.env.PORT||3000, function () {

  console.log(' Server is running on port 3000');


});

//API Key
// 89eef207a58f636d5e541153726a2d3c-us6

// ID List
// 4c7fefd674
