var express = require('express');
var statusCat = require('../');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.use(statusCat());

app.listen(3000);
