
const express = require ('express');
const app = express();

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
});
app.get('/sobre', function(req,res){
    res.send("minha página")
});
app.get('/blog', function(req,res){
    res.send("seja bem vindo ao meu blog")
});


app.listen(8081, function(){
    console.log('serv on')
}); // esse comando tem q ficar na ultima linha do codigo
 