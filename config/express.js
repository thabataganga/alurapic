var express = require('express');
var consign = require('consign');
var app = express();

// configuracao do express

// O primeiro middleware
app.use(express.static('./public'));

consign({ cwd: 'app' })
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;

//api_secret = <your_secret_api_key>