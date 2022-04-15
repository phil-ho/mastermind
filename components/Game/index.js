import React, {useState} from 'react';
import styles from './game.module.css';

import GuessList from '../GuessList';
import CodeMaker from '../CodeMaker';

import Keyboard from '../Keyboard';

const createFeedback = (guess, secretCode) => {
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

const Game = () => {
  const maxTurns = 10;
  const codes = ['0', '1', '2', '3', '4', '5', '6', '7'];

  const generateSecretCode = () => {
    const url = 'https://www.random.org/integers/';
    const num = 4;
    const min = 0;
    const max = 7;
    const col = 1;
    const base = 10;
    const format = 'plain';
    const rnd = 'new';

    setIsLoading(true);

    fetch(`${url}?num=${num}&min=${min}&max=${max}&col=${col}&base=${base}&format=${format}&rnd=${rnd}`)
      .then((response) => response.text())
      .then(text => {
        const newCodeArray = text.split('\n').slice(0, num);
        setSecretCode(newCodeArray);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  const [isLoading, setIsLoading] = useState(false);
  const [secretCode, setSecretCode] = useState();
  const [guessList, setGuessList] = useState([]);

  const handleGuess = (guess) => {
    if (!hasWon() && !hasLost()) {
      setGuessList([...guessList, guess]);
    }
  }

  const handleNewGame = () => {
    setGuessList([]);
    setSecretCode();
    generateSecretCode();
  }

  const hasWon = () => {
    return guessList.length > 0 &&
      guessList[guessList.length - 1].join('') === secretCode.join('');
  }

  const hasLost = () => {
    return guessList.length >= maxTurns;
  }

  const renderPrompt = () => {
    let message = "Can you crack the secret code?";
    const messageStyle = [styles.message];
    if (hasWon()) {
      message = 'You Cracked the Secret Code!';
      messageStyle.push(styles.hasWon);
    }
    if (hasLost()) {
      message = 'Sorry! You Failed to crack the code!';
      messageStyle.push(styles.hasLost);
    }

    return (
      <div className={styles.codeMaker}>
        <h2 className={messageStyle.join(' ')}>{message}</h2>
        <ul className={styles.showSecretList}>
          {secretCode.map((code, index) => (
            <li className={styles.showSecretListItem} key={index}>
              {(hasWon() || hasLost()) ? code : "?"}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const renderWelcomeScreen = () => (
    <div className={styles.welcome}>
      <h1>Welcome to Mastermind!</h1>
    </div>
  );

  const renderGame = () => (
    <>
      {renderPrompt()}
      <GuessList
        guessList={guessList}
        feedbackList={guessList.map((guess) => createFeedback(guess, secretCode))} />
      <CodeMaker
        size={4}
        codes={codes}
        onCodeSubmit={handleGuess} />
      <Keyboard
        keys={codes}
        onChange={(keyPresses) => console.log(keyPresses.join(', '))}
        onEnter={() => console.log('keyboard enter pressed')}
      />
    </>
  );

  return (
    <div className={styles.game}>
      {isLoading && (<div className="loading indicator">LOADING...</div>)}
      <button onClick={handleNewGame}>New Game</button>
      {!secretCode && renderWelcomeScreen()}
      {secretCode && renderGame()}
    </div>
  )

};

export default Game;
