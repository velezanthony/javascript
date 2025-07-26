/**
 * 
 * @param {string} deck 
 * @returns {string[]}
 */
export const requestCard = (deck) => {
    if (deck.length === 0) throw '❌ No hay cartas en el deck';
    return deck.pop(); // tomar la última carta del mazo barajado
};