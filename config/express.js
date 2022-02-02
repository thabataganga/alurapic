var express = require('express');
var app = express();

// configuracao do express

// O primeiro middleware
app.use(express.static('./public'));

module.exports = app;