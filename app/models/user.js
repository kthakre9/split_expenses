var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    email: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);