//  js/modules/statusLogic.js

/** 
 * Um objeto que mapeia cada ação para sias propriedades de status.
 * É uma "fonte de verdade" para os nossos status.
*/
  
const STATUS_CONFIG = {

    ativar: {

        text: 'Sistema Ativo.',
        className: 'status-ativo'

    },
    pausar: {

        text: 'Sistema em pausa.',
        className: 'status-pausado'

    },
    alerta: {

        text: 'Alerta de Falha Crítica.',
        className: 'status-alerta'

    },
    resetar: {

        text: 'Sistema aguardando comando.',
        className: 'status-resetado'

    }

};

/**
 * Função pura que retora as informações de um status com base na ação.
 * @param {string} action - O nome da ação (e.x.: 'ativar').
 * @returns {object} - O objeto com o texto e a classe do status.
 */

export function getStatusInfo(action)   {

    // Retorna a configuração para a ação ou configuração de 'resetar' como padrão
    return STATUS_CONFIG[action] || STATUS_CONFIG.resetar;

}