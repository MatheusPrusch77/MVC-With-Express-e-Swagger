const Usuario = require('../models/Usuario');

exports.listarUsuarios = (req, res) => {
  const listaUsuarios = Usuario.listar();
  res.render('areaAdministrativa', { usuarios: listaUsuarios });
};

exports.cadastrarUsuario = (req, res) => {
  const { nome, email } = req.body;
  const novoUsuario = new Usuario(nome, email);
  Usuario.salvar(novoUsuario);
  res.redirect('/areaAdministrativa');
};

exports.excluirUsuario = (req, res) => {
  const { email } = req.params;
  Usuario.excluir(email);
  res.redirect('/areaAdministrativa');
};

exports.paginaPrincipal = (req, res) => {
  res.redirect('/');
}

