import React, {useState} from 'react';
import styles from './game.module.css';

import GuessList from '../GuessList';
import CodeMaker from '../CodeMaker';

const Game = () => {
  const maxTurns = 10;
  const codes = ['0', '1', '2', '3', '4', '5', '6', '7'];

  const createFeedback = (guess) => {
    let fullMatch = 0;
    let partialMatch = 0;

    const guessCopy = [...guess];
    const secretCopy = [...secretCode];

    // look for full matches
    for (let i = 0; i < secretCode.length; i++) {
      if (guess[i] === secretCode[i]) {
        fullMatch++;
        guessCopy.splice(i, 1);
        secretCopy.splice(i, 1);
      }
    }

    // look for partial matches
    for (let guessCode of guessCopy) {
      const i = secretCopy.indexOf(guessCode);
      if (i > 0) {
        partialMatch++;
        secretCopy.splice(i, 1);
      }
    }

    return {
      fullMatch,
      partialMatch,
    };
  }

  const generateSecretCode = () => {
    return ['1', '2', '3', '4'];
  }

  const [secretCode, setSecretCode] = useState(generateSecretCode());
  const [guesses, setGuesses] = useState([]);

  const handleGuess = (guess) => {
    setGuesses([...guesses, guess]);
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
      <GuessList
        guesses={guesses}
        feedbacks={guesses.map((guess) => createFeedback(guess))} />
      <CodeMaker
        size={4}
        codes={codes}
        onCodeSubmit={handleGuess} />
    </div>
  )

};

export default Game;
