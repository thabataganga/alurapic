// Faz a requisição HTTP
var http = require('http');

// Cria o servidor na porta 3000
http.createServer(function(req, res) {
    res.end();
}).listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});