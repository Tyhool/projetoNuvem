const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send("<h1>Bem vindo aoteste github</h1>");
  

 
});

app.listen(3000,function(erro) {
    if(erro){
        console.log("Erro ao iniciar.");
    }else{
        console.log('Servidor iniciado.');
    }
});
