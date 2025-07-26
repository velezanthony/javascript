import { createDeck } from "./create-deck";

/**
 * 
 * @param {Object} DOMElements 
 * @param {{player:number, computer:number}} scores 
 * @param {string[]} cardsTypes 
 * @param {string[]} cardsSpecialTypes 
 */
export const resetGame = (DOMElements, scores, cardsTypes ,cardsSpecialTypes) => {
    const deck = createDeck(cardsTypes, cardsSpecialTypes);
    scores.player = 0;
    scores.computer = 0;

    DOMElements.playerAreaScore.textContent = '0';
    DOMElements.computerAreaScore.textContent = '0';
    DOMElements.playerAreaCards.innerHTML = '';
    DOMElements.computerAreaCards.innerHTML = '';

    DOMElements.btnRequest.disabled = false;
    DOMElements.btnStop.disabled = false;
    DOMElements.btnNewGame.disabled = true;
};