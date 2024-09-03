const express = require('express');
const bodyParser = require('body-parser');
const usuarioController = require('./controllers/usuarioController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', usuarioController.listarUsuarios);
app.get('/cadastrar', (req, res) => res.render('cadastro'));
app.post('/cadastrar', usuarioController.cadastrarUsuario);
app.post('/excluir/:email', usuarioController.excluirUsuario);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
