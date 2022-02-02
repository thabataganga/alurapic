var api = {};

var fotos = [
    { _id: 1, titulo: 'Leão', url: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg' },
    { _id: 2, titulo: 'Calas de Leão', url: 'https://s4.static.brasilescola.uol.com.br/be/2021/04/casal-de-leoes.jpg' }
]

api.lista = function(req, res) {

    res.json(fotos);
};

api.buscaPorId = function(req, res) {
    var foto = fotos.find(function(foto) {
        return foto._id == req.params.id;
    });

    res.json(foto);
};

module.exports = api;