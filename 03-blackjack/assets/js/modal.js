const modal = document.querySelector('#winner-modal');
const modalMessage = modal.querySelector('#winner-message')
const btnModal =  modal.querySelector('#modal-ok');

btnModal.addEventListener('click', () =>{ 
    modal.classList.add('hidden');
});

function openModal( winner ){

    switch (winner) {
        case 'computer':
            modalMessage.textContent = 'Computer te gano la partida.';
            break;
        case 'player':
            modalMessage.textContent = 'Ganaste la partida.';
            break;
        case 'draw':
            modalMessage.textContent = 'Hubo un empate';
            break;
        default:
            break;
    }

    modal.classList.remove('hidden');
}