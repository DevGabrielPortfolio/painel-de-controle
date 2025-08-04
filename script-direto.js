// Arquivo: script-direto.js

//  Seleciona o display de status
const statusDisplay = document.querySelector('#status-display');

//  Selecionar CADA botão individualmente
const btnAtivar = document.querySelector('[data-action="ativar"]');
const btnPausar = document.querySelector('[data-action="pausar"]');
const btnAlerta = document.querySelector('[data-action="alerta"]');
const btnResetar = document.querySelector('[data-action="resetar"]');

//  Adicionar um "ouvinte" de clique para o botão ATIVAR
btnAtivar.addEventListener('click', () => {

    statusDisplay.textContent = 'Sistema Ativo.';
    statusDisplay.className = 'status-ativo';

});

//  Adicionar um "ouvinte" de clique para o botão PAUSAR
btnPausar.addEventListener('click', () => {

    statusDisplay.textContent = 'Sistema em pausa.';
    statusDisplay.className = 'status-pausado';

});

//  Adicionar um "ouvinte" de clique para o botão ALERTA
btnAlerta.addEventListener('click', () => {

    statusDisplay.textContent = 'Alerta de Falha Crítica.';
    statusDisplay.className = 'status-alerta';

});

//  Adicionar um "ouvinte" de clique para o botão RESETAR
btnResetar.addEventListener('click', () => {

    statusDisplay.textContent = 'Sistema aguardando comando.';
    statusDisplay.className = 'status-resetado';

});