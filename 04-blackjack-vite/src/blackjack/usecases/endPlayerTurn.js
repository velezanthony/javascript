import { computerGame } from "./computer-game";
/**
 * 
 * @param {Object} DOMElements 
 * @param {number} MAXSCORE 
 * @param {string[]} deck 
 * @param {{player:number, computer:number}} scores 
 * @param {string[]} cardsSpecialTypes 
 */
export const endPlayerTurn = (DOMElements, MAXSCORE, deck, scores, cardsSpecialTypes) => {
    DOMElements.btnRequest.disabled = true;
    DOMElements.btnStop.disabled = true;
    computerGame(DOMElements, MAXSCORE, deck , scores, cardsSpecialTypes);
};