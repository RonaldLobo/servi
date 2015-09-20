var usuarios = {
    1: {id: 1, nombre: "Ronald", apellido: 'Lobo', telefono: 87051854},
    2: {id: 2, nombre: "kim", apellido: 'Porras', telefono: 88888888},
    3: {id: 3, nombre: "Reymond", apellido: 'Lobo', telefono: 99999999},
};

exports.list =  function(req, res){
    res.send({usuarios: usuarios});
};

exports.post = function(req, res) {
	res.status(201).end();
};

exports.get = function(req, res) {
	res.send({usuario: usuarios[req.params.id]});
};

exports.put = function(req, res) {
	res.send({
	  'usuario': {
	    id: req.params.id
	  }
	});
};

exports.delete = function(req, res) {
	res.status(204).end();
};
