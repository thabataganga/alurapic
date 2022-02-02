var express = require('express');
var app = express();

// configuracao do express

app.use(express.static('./public'));

module.exports = app;