const conexao = require('../infra/conexao');
const moment = require('moment')


class Agendamento {
    
    inserir(agendamento) {
        const sql = 'INSERT INTO agendamentos SET ?';

        const data_servico = moment(agendamento.data_servico).format('YYYY-MM-DD')
        const data_agendamento = moment().format('YYYY-MM-DD')
        const agendamentoComData = {...agendamento, data_agendamento, data_servico}
        conexao.query(sql, agendamentoComData, (error, results) => {
            if (error) {
                throw error
            }

            console.log(results);
        });
    };
}

module.exports = new Agendamento;
