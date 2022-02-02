// Faz a requisição HTTP
var http = require('http');
var app = require('./config/express');

// Cria o servidor na porta 3000
/// a função createServer vem do método http
/// não basta chamar elaa, tbm é preciso chamar a função listen, que recebe uma porta como parametro
http.createServer(app).listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});