var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//connect
var mongoose = require('mongoose');
mongoose.connect("mongodb://root:1234@jello.modulusmongo.net:27017/X3egubyx");

var User = require('./app/models/user');


app.use(bodyParser.json()); // parse application/json
app.use(express.static(path.join(__dirname, 'app')));


//create a user
app.post('/user', function (req, res) {

   var user = new User();
    user.username = req.body.name;
    user.password = req.body.password;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;

    // user.save(function (err) {
    //
    // })
});

app.listen(7002, function () {
    console.log("app listening on port 7002");
});