const Sequelize = require('sequelize');

// conectando ao banco de dados
    const sequelize = new Sequelize('postapp','root','123456',{
        host: "localhost",
        dialect: 'mysql' 
    }); 
module.exports = sequelize