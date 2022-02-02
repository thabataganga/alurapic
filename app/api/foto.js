var api = {};

api.lista = function(req, res) {
    var fotos = [
        { _id: 1, titulo: 'Leão', url: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg' },
        { _id: 2, titulo: 'Calas de Leão', url: 'https://s4.static.brasilescola.uol.com.br/be/2021/04/casal-de-leoes.jpg' }
    ]

    res.json(fotos);
};

module.exports = api;