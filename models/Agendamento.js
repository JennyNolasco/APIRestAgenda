const conexao = require('../infra/conexao');
const moment = require('moment')


class Agendamento {
    
    inserir(agendamento, resp) {
        const sql = 'INSERT INTO agendamentos SET ?';

        const data_servico = moment(agendamento.data_servico).format('YYYY-MM-DD')
        const data_agendamento = moment().format('YYYY-MM-DD')
        const agendamentoComData = {...agendamento, data_agendamento, data_servico}

        //Validações
        const isDataValida = moment(agendamento.data_servico).isSameOrAfter(agendamento.data_agendamento)
        const isNomeClienteValido = agendamento.nome_cliente.length > 4

        const validacoes = [
            { 
                nome: "data_servico",
                valido: isDataValida,
                mensagem: "Data do Agendamento deve ser igual ou superior a atual"
            },
            { 
                nome: "nome_cliente",
                valido: isNomeClienteValido,
                mensagem: "O nome do cliente deve ter pelo menos 4 caracteres"
            }
        ];

        const errors = validacoes.filter(campo => !campo.valido);
        
        if(errors.length > 0) {
            resp.status(400).json(errors)
        }

        conexao.query(sql, agendamentoComData, (error, results) => {
            if (error) {
                resp.status(400).json(error)
            }
            resp.status(201).json(results)
        });
    };
}

module.exports = new Agendamento;
