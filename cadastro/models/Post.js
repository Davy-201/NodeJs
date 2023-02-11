const Sequelize = require('sequelize');
const database = require('./db');

const Post = database.define('postagens', {
    titulo: {type: Sequelize.STRING},
    conteudo: {type: Sequelize.TEXT}
})

module.exports = Post;
//Post.sync({force: true})