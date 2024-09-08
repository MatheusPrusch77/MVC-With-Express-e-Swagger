const express = require('express');
const bodyParser = require('body-parser');
const usuarioController = require('./controllers/usuarioController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/areaAdministrativa', usuarioController.listarUsuarios);
app.get('/cadastrar', (req, res) => res.render('cadastro'));
app.post('/cadastrar', usuarioController.cadastrarUsuario);
app.post('/excluir/:email', usuarioController.excluirUsuario);
app.get('/', (req, res) => {res.render('home/index')});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
