/**
 * 
 * @param {string} card 
 * @param {string[]} cardsSpecialTypes 
 * @returns {-1 | string}
 */
export const cardValue = (card,cardsSpecialTypes ) => {
    const value = card.slice(0, -1);
    if (!isNaN(value)) return parseInt(value);
    if (cardsSpecialTypes.includes(value)) return value === 'A' ? 11 : 10;
    return -1; // error
};