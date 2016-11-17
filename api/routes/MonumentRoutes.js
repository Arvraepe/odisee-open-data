
const MonumentRepository = require('repositories/MonumentRepository');

module.exports.init = (App) => {

    App.get('/api/monuments/count', (req, res) => res.status(200).send({ total: MonumentRepository.getMonumentCount() }));
    App.get('/api/monuments/by/name/:value', (req, res) => res.status(200).send(MonumentRepository.containsBy("BENAMING_NL", req.params.value)));
};
