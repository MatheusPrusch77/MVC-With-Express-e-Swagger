const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listarUsuarios);
router.post('/cadastrar', usuarioController.cadastrarUsuario);
router.post('/excluir/:id', usuarioController.excluirUsuario);

module.exports = router;
