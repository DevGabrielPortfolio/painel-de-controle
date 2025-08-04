// Arquivo: script-delegation.js

//  Seleciona o display de status
const statusDisplay = document.querySelector('#status-display');

//  Seleciona o CONTAINER PAI dos botões 
const containerDeBotoes = document.querySelector('.botoes-acao');

//  Adiciona UM ÚNICO "ouvinte" de clique ao container
containerDeBotoes.addEventListener('click', (event) => {

    //  Pega o elemento exato que foi clicado dentro do container 
    const target  = event.target;

    //  Se o clique não foi em um botão, ignora e não faz nada
    if (target.tagName !== 'BUTTON')    {

        return;

    }

    //  Pega a ação do data-attribute do botão clicado
    const acao = target.dataset.action;

    //  Usa um switch (ou if/else) para decidir o que fazer 
    switch (acao) {

        case 'ativar':

            statusDisplay.textContent = 'Sistema Ativo.';
            statusDisplay.className = 'status-ativo';

            break;
    
        case 'pausar':

            statusDisplay.textContent = 'Sistema em pausa.';
            statusDisplay.className = 'status-pausado';

            break;
        
        case 'alerta':

            statusDisplay.textContent = 'Alerta de Falha Crítica.';
            statusDisplay.className = 'status-alerta';

            break;

        case 'resetar':

            statusDisplay.textContent = 'Sistema aguardando comando.';
            statusDisplay.className = 'status-resetado';

            break;

            default: //  Um 'dafault' é uma boa prática, embora não seja necessário aqui

                console.log('Ação desconhecida!');

                break;

    }

});