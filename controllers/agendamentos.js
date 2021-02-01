// Exportando app
module.exports = app => {
    // O express nos fornece 2 coisas: req e resp
    // Req o que estamos recebendo e Resp o que iremos enviar 
    app.get('/agendamentos', (req, resp) => {
        resp.send('Servidor OK')
    });
};