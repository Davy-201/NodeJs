const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('teste','root','123456',{
    host: "localhost",
    dialect: 'mysql' 
}); // conectando ao banco de dados

/*sequelize.authenticate().then(function(){
    console.log('conectado com sucesso!')
}).catch(function(erro){
    console.log('falha ao se conectar:'+erro)
});*/

const postagem =sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});// criando tabelas com sequelize

//postagem.sync({force: true});

/*postagem.create({
    titulo: 'titulo',
    conteudo: 'conteudo'
});*/ //inserir dados na tabela

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});// criando tabelas com sequelize

//Usuario.sync({force: true});

/*Usuario.create({
    nome: 'usuarioX',
    idade: 20,
    email: "sjkajs@teste.com"
});*/ //inserir dados na tabela