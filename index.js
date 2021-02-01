const express = require('express')


//Criando nossa aplicação
const app = express()

//Subindo o servidor na porta 3000 e assim que subir executar uma função
app.listen(3000,  () => {
    console.log('Servidor Rodando na porta 3000')
});

// O express nos fornece 2 coisas: req e resp
// Req o que estamos recebendo e Resp o que iremos enviar 
app.get('/', (req, resp) => {
    resp.send('Servidor OK')
});