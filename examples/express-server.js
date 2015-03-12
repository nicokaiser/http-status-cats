var express = require('express');
var statusCat = require('../');

var app = express();

app.use(statusCat());

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);
