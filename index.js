const configExpress = require('./config/configExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/Tabelas');

//O connect é responsável por conectar no servidor, mas precisamos testar
conexao.connect(error => {
    if(error) {
       throw error;
    }
    //Criando as Tabelas ao iniciar o app
    Tabelas.init(conexao)

    // O configExpress é uma função que retorna nosso app configurado. 
    //Chamando a função para obter o app configurado
    app = configExpress()

    //Subindo o servidor na porta 3000 e assim que subir executar uma função
    app.listen(3000,  () => {
        console.log('Servidor Rodando na porta 3000')

    });
});


