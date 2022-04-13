import React, {useState} from 'react';
import styles from './game.module.css';

import GuessList from '../GuessList';

const Game = () => {
  const maxTurns = 10;
  const generateSecretCode = () => {
    return [1,2,3,4];
  }
  const generateFeedback = (guess) => {
    // return feedback for guess
  }

  const [secretCode, setSecretCode] = useState(generateSecretCode());
  const [guesses, setGuesses] = useState([
    [1,3,4,5],
    [2,3,4,5],
  ]);

  const handleGuess = (guess) => {
    // add guess to guesses
    // compare guess to secret code
  }

  const hasWon = () => {
    return guesses.length > 0 &&
      guesses[guesses.length - 1].join('') === secretCode.join('');
  }

  const hasLost = () => {
    return guesses.length >= maxTurns
  }

  // reset/restart game
    // generate new code
    // clear guesses

  return (
    <div className={styles.game}>
      {hasWon() && (<div className={styles.hasWon}>You Won!</div>)}
      {hasLost() && (<div className={styles.hasWon}>You Lost!</div>)}
      GAME BOARD
      <GuessList guesses={guesses} />
    </div>
  )

};

export default Game;
