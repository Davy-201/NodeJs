const mongoose = require ('mongoose');

//config mongoose

mongoose.connect('mongodb://localhost/aprendendo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('mongoDB conectado');
}).catch((err) =>{
    console.log('Houve um erro ao se conectar:' +err);
});
// model usuario
//definindo model

const Userschema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
    }
});
//collection

mongoose.model('usuarios', Userschema);
const victor = mongoose.model('usuarios');

 new victor ({
    nome: 'Davy Geyson',
    email: 'davy@hotmail.com',
    idade: 20,
    pais: 'Brasil',
 }).save().then(() => {
     console.log('Usuario criado com sucesso!')
 }).catch((erro) => {
     console.log('Erro ao criar usuario'+erro)
 });0