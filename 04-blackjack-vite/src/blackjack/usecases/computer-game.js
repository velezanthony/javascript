import { requestCard, cardValue, openModal, renderCard, getWinner } from "./";
/**
 * 
 * @param {Object} DOMElements 
 * @param {number} MAXSCORE 
 * @param {string[]} deck 
 * @param {{player:number, computer:number}} scores 
 * @param {string[]} cardsSpecialTypes 
 */
export const computerGame = (DOMElements, MAXSCORE, deck, scores, cardsSpecialTypes) => {
    const intervalId = setInterval(() => {
        const card = requestCard(deck);
        const value = cardValue(card, cardsSpecialTypes);

        scores.computer += value;
        DOMElements.computerAreaScore.textContent = `${scores.computer}`;
        renderCard(card, DOMElements.computerAreaCards);

        const shouldStop =
            scores.computer >= MAXSCORE || scores.computer > scores.player;

        if (shouldStop) {
            DOMElements.btnNewGame.disabled = false;
            clearInterval(intervalId);
            openModal(getWinner(MAXSCORE, scores));
        }
    }, 800);
};