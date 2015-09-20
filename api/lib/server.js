express = require('express');
var app = express();

var usuarios = require('./usuarios');
var clientes = require('./clientes');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/usuarios', usuarios.list);
app.post('/api/usuarios', usuarios.post);
app.get('/api/usuarios/:id', usuarios.get);
app.put('/api/usuarios/:id', usuarios.put);
app.delete('/api/usuarios/:id', usuarios.delete);

app.get('/api/clientes', clientes.list);
app.post('/api/clientes', clientes.post);
app.get('/api/clientes/:id', clientes.get);
app.put('/api/clientes/:id', clientes.put);
app.delete('/api/clientes/:id', clientes.delete);

module.exports = app