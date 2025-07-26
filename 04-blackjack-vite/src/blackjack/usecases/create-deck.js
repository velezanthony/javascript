import { shuffleDeck} from "./shuffle-deck";
/**
 * 
 * @param {string[]} cardsType 
 * @param {string[]} cardsSpecialTypes 
 * @returns {string[]}
 */
export const createDeck = (cardsType, cardsSpecialTypes) => {
    const deck = [];

    for (let type of cardsType) {
        for (let i = 2; i <= 10; i++) {
            deck.push(i + type);
        }
        for (const special of cardsSpecialTypes) {
            deck.push(special + type);
        }
    }

    return shuffleDeck(deck);
};
