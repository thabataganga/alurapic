var express = require('express');
var consign = require('consign');
var app = express();

// configuracao do express

// O primeiro middleware
app.use(express.static('./public'));

consign()
    .include('app/routes')
    .into(app);

module.exports = app;