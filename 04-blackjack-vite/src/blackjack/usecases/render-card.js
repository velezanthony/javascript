/**
 * 
 * @param {string} card 
 * @param {HTMLDivElement} container 
 */
export const renderCard = (card, container) => {
    console.log(container);
    const cardImg = document.createElement('img');
    cardImg.src = `./assets/img/${card}.png`;
    container.append(cardImg);
};