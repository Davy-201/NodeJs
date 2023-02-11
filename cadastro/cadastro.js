const express = require ('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const Post = require('./models/Post');
const db = require('./models/db');

/*db
    .authenticate()
    .then(()  =>{
        console.log('conectou ao banco')
    })
    .catch(err => {
        console.log('ocorreu um erro', err)
    })*/

//config body-parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//config template engine
app.engine('handlebars', handlebars.engine({defaultlayout: 'main'}))
app.set('view engine','handlebars')

//Rotas
app.get('/', function(req, res){
    Post.findAll().then(posts =>{
        res.render('home', {posts: posts})
    })
})

app.get('/formulario', function(req, res){
    res.render('formulario')
});

app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()  =>{
        res.redirect('/home')
    }).catch(erro =>{
        res.send('Houve um erro', + erro)
    });

    /*req.body.conteudo
    req.body.titul
    res.send('formulario recebido com sucesso!')*/
});

app.get('/deletar/:id', (req, res) => {
    Post.destroy({where: {'id': req.params.id}}).then(() => {
        res.send('postagem deletada')
    }).catch((erro) => {
        res.send('Postagem não foi indentificada ou não existe')
    })
})

app.listen(8081, function(){
    console.log('serv on')
});
