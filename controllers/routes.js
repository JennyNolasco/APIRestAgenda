const Agendamento = require('../models/Agendamento')

// Exportando app
module.exports = app => {
    // O express nos fornece 2 coisas: req e resp
    // Req o que estamos recebendo e Resp o que iremos enviar 
    app.get('/agendamentos', (req, resp) => {
        Agendamento.listagem(resp);
    });

    app.get('/agendamentos/:id', (req, resp) => {
        //Nosso ID no DB é int por isso o parse 
        //req.params retorna o parametros passados na requisição 
        const id = parseInt(req.params.id)
        Agendamento.buscaPorID(id, resp);
    });

    app.patch('/agendamentos/:id', (req, resp) => {
        //Nosso ID no DB é int por isso o parse 
        //req.params retorna o parametros passados na requisição 
        const id = parseInt(req.params.id)
        Agendamento.alterar(id, req.body, resp);
    });

    app.delete('/agendamentos/:id', (req, resp) => {
        //Nosso ID no DB é int por isso o parse 
        //req.params retorna o parametros passados na requisição 
        const id = parseInt(req.params.id)
        Agendamento.remover(id, resp);
    });

    app.post('/agendar', (req, resp) => {
        //Verificar o que está sendo recebido
        const agendamento = req.body;

        //Passar o resp, para já retornar nosso resultado
        Agendamento.inserir(agendamento, resp);     
    });
};