const express = require('express')


//Criando nossa aplicação
const app = express()

//Subindo o servidor na porta 3000 e assim que subir executar uma função
app.listen(3000,  () => {
    console.log('Servidor Rodando na porta 3000')
});