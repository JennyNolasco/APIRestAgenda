const express = require('express')
const consign = require('consign')

module.exports = () => {
    //Criando nossa aplicação
    const app = express()

    //Incluir tudo o que está na pasta controllers dentro do app
    consign()
        .include('controllers')
        .into(app)

    return app;
};


