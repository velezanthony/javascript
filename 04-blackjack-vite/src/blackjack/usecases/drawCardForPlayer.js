import {
    endPlayerTurn, renderCard,
    cardValue,
    requestCard
} from "./";

/**
 * 
 * @param {Object} DOMElements 
 * @param {number} MAXSCORE 
 * @param {{player:number, computer:number}} scores 
 * @param {string[]} cardsSpecialTypes 
 * @param {string[]} deck 
 */
export const drawCardForPlayer = (DOMElements, MAXSCORE, scores, cardsSpecialTypes, deck) => {
    const card = requestCard(deck);
    const value = cardValue(card, cardsSpecialTypes);
    scores.player += value;
    DOMElements.playerAreaScore.textContent = `${scores.player}`;
    renderCard(card, DOMElements.playerAreaCards);

    if (scores.player === MAXSCORE) {
        console.warn('🎉 Ganaste la partida');

        endPlayerTurn(DOMElements, MAXSCORE, deck, scores, cardsSpecialTypes);

    } else if (scores.player > MAXSCORE) {
        console.warn('💥 Te pasaste');

        endPlayerTurn(DOMElements, MAXSCORE, deck, scores, cardsSpecialTypes);

    }
};