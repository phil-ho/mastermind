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

    let guessCopy = [...guess];
    const secretCopy = [...secretCode];

    // look for full matches
    for (let i = 0; i < secretCode.length; i++) {
      if (guess[i] === secretCode[i]) {
        fullMatch++;
        guessCopy[i] = 'null';
        secretCopy[i] = 'null';
      }
    }

    guessCopy = guessCopy.filter((value) => value !== 'null');
    // look for partial matches
    for (let guessCode of guessCopy) {
      const i = secretCopy.indexOf(guessCode);
      if (i >= 0) {
        partialMatch++;
        secretCopy[i] = 'null';
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
  const [guessList, setGuessList] = useState([]);

  const handleGuess = (guess) => {
    setGuessList([...guessList, guess]);
    // compare guess to secret code
  }

  const hasWon = () => {
    return guessList.length > 0 &&
      guessList[guessList.length - 1].join('') === secretCode.join('');
  }

  const hasLost = () => {
    return guessList.length >= maxTurns
  }

  // reset/restart game
    // generate new code
    // clear guesses
  return (
    <div className={styles.game}>
      {hasWon() && (<div className={styles.hasWon}>You Won!</div>)}
      {hasLost() && (<div className={styles.hasLost}>You Lost!</div>)}
      <GuessList
        guessList={guessList}
        feedbackList={guessList.map((guess) => createFeedback(guess))} />
      <CodeMaker
        size={4}
        codes={codes}
        onCodeSubmit={handleGuess} />
    </div>
  )

};

export default Game;
