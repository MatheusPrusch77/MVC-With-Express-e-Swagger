const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/areaAdministrativa', usuarioController.listarUsuarios);
router.post('/cadastrar', usuarioController.cadastrarUsuario);
router.post('/excluir/:id', usuarioController.excluirUsuario);
router.post('/', usuarioController.paginaPrincipal);
module.exports = router;
