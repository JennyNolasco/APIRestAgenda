const Agendamento = require('../models/Agendamento')

// Exportando app
module.exports = app => {
    // O express nos fornece 2 coisas: req e resp
    // Req o que estamos recebendo e Resp o que iremos enviar 
    app.get('/agendamentos', (req, resp) => {
        resp.send('Servidor OK')
    });

    app.post('/agendar', (req, resp) => {
        //Verificar o que está sendo recebido
        const agendamento = req.body;
        Agendamento.inserir(agendamento)
        resp.send('POST OK')
    });
};