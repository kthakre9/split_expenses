var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // parse application/json
app.use(express.static(path.join(__dirname, 'app')));

//connect
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://root:1234@jello.modulusmongo.net:27017/X3egubyx");

var User = require('./app/models/user');

//Get Users
app.get('/users', function (req, res) {
    User.find(function(err, users) {
        if (err) {
            res.send(err);
        }
        else{
            res.json(users);
        }

    });
});

app.post('/users/authenticate', function(req, res, next){
    User.find({username: req.body.username}, function (err, user) {
        if (err) {
            res.send(err);
        }
        else{
            res.json(user);
        }
    });

});


//create a user
app.post('/users', function (req, res) {

   var user = new User({
       username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        firstName : '',
        lastName :''
   });

    console.log(user);

    user.save(function (err) {
        if (err){
            res.send(err);
        } else{
            res.json({ message: 'User created!' });
        }

    })
});

app.listen(7002, function () {
    console.log("app listening on port 7002");
});