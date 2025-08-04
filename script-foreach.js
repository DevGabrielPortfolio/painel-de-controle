// Arquivo: script-foreach.js

//  Seleciona os elementos principais 
const statusDisplay = document.querySelector('#status-display');

//  PASSO 1: Seleciona todos os botões que têm o atributo 'data-action'
const todosOsBotoes = document.querySelectorAll('[data-action]');
 
//  PASSO 2: Percorre a lista de botões com o loop forEach
todosOsBotoes.forEach(botao => {

    //  PASSO 3: Adiciona um ouvinte de clique individual para CADA botão
    botao.addEventListener('click', () => {

        //  Pega a ação específica deste botão
        const acao = botao.dataset.action;

        //  Usa um switch para executar a lógica correspondente à ação
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

});