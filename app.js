var express = require('express');
var app = express();
var db = require('./db');


// users
var UserController = require('./user/UserController');
app.use('/users', UserController);

// comebacks
var ComebackController = require('./comeback/ComebackController');
app.use('/comebacks', ComebackController);


module.exports = app;