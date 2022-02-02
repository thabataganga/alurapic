// Faz a requisição HTTP
var http = require('http');
var app = require('./config/express');

// Cria o servidor na porta 3000
http.createServer(app).listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});