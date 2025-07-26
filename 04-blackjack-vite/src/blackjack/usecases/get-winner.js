/**
 * 
 * @param {number} MAXSCORE 
 * @param {{player:number, computer:number}} scores 
 * @returns {'player' | 'computer' | 'draw'}
 */
export const getWinner = (MAXSCORE, scores) => {
    if (scores.player === scores.computer) return 'draw';

    if (scores.player > MAXSCORE && scores.computer > MAXSCORE) {
        return (scores.player - MAXSCORE) < (scores.computer - MAXSCORE)
            ? 'player' : 'computer';
    }

    return scores.player <= MAXSCORE && (scores.player > scores.computer || scores.computer > MAXSCORE)
        ? 'player'
        : 'computer';
};