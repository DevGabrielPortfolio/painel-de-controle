//  js/main.js

//  Importa as funções que precisamos de nossos módulos especializados 
import {    getStatusInfo   } from './modules/statusLogic.js';
import {    updateDisplay   } from './modules/uiUpdater.js';

//  --- Seleção dos Elementos Principais ---
const statusDisplay = document.querySelector('#status-display');
const containerDeBotoes = document.querySelector('.botoes-acao');

/**
 * Lida com o evento de clique, orquestrando as ações.
 * @param {Event} event - O objeto do evento de clique.
 */

function handleButtinClick(event)   {

    const target = event.target;

    if (target.tagName !== 'BUTTON') return;

    const acao = target.dataset.action;

    //  1. Pede ao "Chef" (statusLogic) as informações para a ação clicada.
    const statusInfo = getStatusInfo(acao);

    //  2. Manda o "Cozinheiro" (uiUpdater) atualizar a tela com essas informações
    updateDisplay(statusDisplay, statusInfo);

}

/**
 * Função prpincipal que inicializa a aplicação.
 */

function init() {

    if(!containerDeBotoes) return;

    //  Configura o estado inicial da página ao carregar
    const initialStatus = getStatusInfo('resetar');
    updateDisplay(statusDisplay, initialStatus);

    //  Adiciona o único "ouvinte" de eventos
    containerDeBotoes.addEventListener('click', handleButtinClick);
    console.log('Painel de Controle Modularizado iniciado.');

}

//  Executa a função de inicialização
init();