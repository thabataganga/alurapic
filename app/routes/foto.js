module.exports = function(app) {

    var api = app.api.foto;
    app.get('/v1/fotos', api.lista);

    app.get('/v1/fotos/:id', api.buscaPorId);

    app.get('/v1/fotos/:id/tipo/:idTipo', function(req, res) {

        var id = req.params.id;
        var idTipo = req.params.idTipo;
    });


}