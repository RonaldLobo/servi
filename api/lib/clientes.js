//module.exports = function(app) {
  //var _ = require('lodash');

  var clientes = {
    1: {id: 1, nombre: "Lulu", apellido: 'Lobo', telefono: 87051854},
    2: {id: 2, nombre: "Rex", apellido: 'Lobo', telefono: 88888888},
    3: {id: 3, nombre: "Siri", apellido: 'Porras', telefono: 99999999},
  };

  exports.list = function(req, res) {
    res.send({clientes: clientes});
  };

  exports.post = function(req, res) {
    res.status(201).end();
  };

  exports.get = function(req, res) {
    res.send({cliente: clientes[req.params.id]});
  };

  exports.put = function(req, res) {
    res.send({
      'cliente': {
        id: req.params.id
      }
    });
  };

  exports.delete = function(req, res) {
    res.status(204).end();
  };

  //module.exports = clientesRouter;

  //app.use('/clientes', clientesRouter);
//};