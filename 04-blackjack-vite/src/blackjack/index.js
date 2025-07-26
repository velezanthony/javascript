import { createDeck, 
        drawCardForPlayer, 
        endPlayerTurn, 
        resetGame ,
        } from "./usecases";

const cardsTypes = ['C', 'D', 'H', 'S'];
const cardsSpecialTypes = ['A', 'J', 'Q', 'K'];
const MAXSCORE = 21;

let deck = [];
const scores = {
    player : 0,
    computer : 0,
}


// DOM references
const DOMElements = [];
DOMElements.btnNewGame = document.querySelector('#btnNewGame');

DOMElements.btnRequest = document.querySelector('#btnRequest');
DOMElements.btnRequest.disabled = true;

DOMElements.btnStop = document.querySelector('#btnStop');
DOMElements.btnStop.disabled = true;

DOMElements.playerArea = document.querySelector('.player-area');
DOMElements.playerAreaScore = DOMElements.playerArea.querySelector('.score');
DOMElements.playerAreaCards = DOMElements.playerArea.querySelector('.cards-area');

DOMElements.computerArea = document.querySelector('.computer-area');
DOMElements.computerAreaScore = DOMElements.computerArea.querySelector('.score');
DOMElements.computerAreaCards = DOMElements.computerArea.querySelector('.cards-area');

deck = createDeck(cardsTypes, cardsSpecialTypes);

// Event listeners
btnNewGame.addEventListener('click', ()=>{
    resetGame(DOMElements, scores, cardsTypes, cardsSpecialTypes);
}
    
);

btnRequest.addEventListener('click', () => {
    drawCardForPlayer(DOMElements, MAXSCORE, scores, cardsSpecialTypes, deck);
}
    
);

btnStop.addEventListener('click', () => {
    endPlayerTurn(DOMElements, MAXSCORE, deck, scores, cardsSpecialTypes);
});
