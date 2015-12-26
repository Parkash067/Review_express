/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
var express = require('express');
var path = require('path');
var app = express();
var admin = express.Router();
admin.get('/', function (req, res) {
    res.send("admin panel");
});
admin.get('/home', function (req, res) {
    res.send("admin home");
});
admin.get('/about', function (req, res) {
    res.send("admin about");
});
module.exports = admin;
