const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    //Criando nossa aplicação
    const app = express()

    //use() é utilizado para carregar libs dentro do express, para Ler o body html da requisição
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    //use() é utilizado para carregar libs dentro do express, para Ler o body em json da requisição
    app.use(bodyParser.json());

    //Incluir tudo o que está na pasta controllers dentro do app
    consign()
        .include('controllers')
        .into(app)

    return app;
};


