// Patron Modulo
const myModule = (() => {
    'use strict';

    const cardCodes = ['C', 'D', 'H', 'S'];
    const cardSpecials = ['A', 'J', 'Q', 'K'];
    const MAXSCORE = 21;

    let deck = [];
    let playerScore = 0;
    let computerScore = 0;

    // DOM references
    const btnNewGame = document.querySelector('#btnNewGame');

    const btnRequest = document.querySelector('#btnRequest');
    btnRequest.disabled = true;

    const btnStop = document.querySelector('#btnStop');
    btnStop.disabled = true;

    const playerArea = document.querySelector('.player-area');
    const playerAreaScore = playerArea.querySelector('.score');
    const playerAreaCards = playerArea.querySelector('.cards-area');

    const computerArea = document.querySelector('.computer-area');
    const computerAreaScore = computerArea.querySelector('.score');
    const computerAreaCards = computerArea.querySelector('.cards-area');

    const crearDeck = () => {
        const deck = [];

        for (let code of cardCodes) {
            for (let i = 2; i <= 10; i++) {
                deck.push(i + code);
            }
            for (const special of cardSpecials) {
                deck.push(special + code);
            }
        }

        return shuffleDeck(deck);
    };

    const shuffleDeck = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    };

    const requestCard = () => {
        if (deck.length === 0) throw '❌ No hay cartas en el deck';
        return deck.pop(); // tomar la última carta del mazo barajado
    };

    const cardValue = (card) => {
        const value = card.slice(0, -1);
        if (!isNaN(value)) return parseInt(value);
        if (cardSpecials.includes(value)) return value === 'A' ? 11 : 10;
        return -1; // error
    };

    const renderCard = (card, container) => {
        const cardImg = document.createElement('img');
        cardImg.src = `./assets/img/${card}.png`;
        container.append(cardImg);
    };

    const drawCardForPlayer = () => {
        const card = requestCard();
        const value = cardValue(card);
        playerScore += value;
        playerAreaScore.textContent = `${playerScore}`;
        renderCard(card, playerAreaCards);

        if (playerScore === MAXSCORE) {
            console.warn('🎉 Ganaste la partida');
            endPlayerTurn();
        } else if (playerScore > MAXSCORE) {
            console.warn('💥 Te pasaste');
            endPlayerTurn();
        }
    };

    const endPlayerTurn = () => {
        btnRequest.disabled = true;
        btnStop.disabled = true;
        computerGame();
    };

    const computerGame = () => {
        const intervalId = setInterval(() => {
            const card = requestCard();
            const value = cardValue(card);

            computerScore += value;
            computerAreaScore.textContent = `${computerScore}`;
            renderCard(card, computerAreaCards);

            const shouldStop =
                computerScore >= MAXSCORE || computerScore > playerScore;

            if (shouldStop) {
                btnNewGame.disabled = false;
                clearInterval(intervalId);
                openModal(getWinner());
            }
        }, 800);
    };

    const getWinner = () => {
        if (playerScore === computerScore) return 'draw';

        if (playerScore > MAXSCORE && computerScore > MAXSCORE) {
            return (playerScore - MAXSCORE) < (computerScore - MAXSCORE)
                ? 'player' : 'computer';
        }

        return playerScore <= MAXSCORE && (playerScore > computerScore || computerScore > MAXSCORE)
            ? 'player'
            : 'computer';
    };

    const resetGame = () => {
        deck = crearDeck();
        playerScore = 0;
        computerScore = 0;

        playerAreaScore.textContent = '0';
        computerAreaScore.textContent = '0';
        playerAreaCards.innerHTML = '';
        computerAreaCards.innerHTML = '';

        btnRequest.disabled = false;
        btnStop.disabled = false;
        btnNewGame.disabled = true;
    };

    // Event listeners
    btnNewGame.addEventListener('click', resetGame);

    btnRequest.addEventListener('click', drawCardForPlayer);

    btnStop.addEventListener('click', () => {
        endPlayerTurn();
    });


    return {
        NewGame: resetGame //exponiendo función fuera del modulo.
    }
})();
