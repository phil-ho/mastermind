import React, {useState, useEffect} from 'react';
import styles from './game.module.css';

import Gameover from '../Gameover';
import GuessList from '../GuessList';
import Keyboard from '../Keyboard';
import Modal from '../Modal';
import Rules from '../Rules';

/**
 * Util function for calculating guess feedback
 * @param {string[]} guess
 * @param {string[]} secretCode
 * @return {{fullMatch: number, partialMatch: number}}
 */
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

/**
 * Main Game component
 */
const Game = () => {
  const codes = ['0', '1', '2', '3', '4', '5', '6', '7'];
  const maxTurns = 10;
  const secretCodeLength = 4;

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
  const [currentGuess, setCurrentGuess] = useState();
  const [showModal, setShowModal] = useState(false);

  const zeroState = !isLoading && !secretCode;
  const hasWon = guessList.length > 0 &&
      guessList[guessList.length - 1].join('') === secretCode.join('');
  const hasLost = !hasWon && guessList.length >= maxTurns;
  const isPlaying = secretCode && !hasWon && !hasLost;

  useEffect(() => {
    if (hasWon || hasLost || zeroState) {
      setShowModal(true);
    }
  }, [hasWon, hasLost, zeroState])

  const handleGuessChange = (codeArray) => {
    if (!hasWon && !hasLost) {
      setCurrentGuess(codeArray);
    }
  };

  const handleGuessSubmit = () => {
    if (!hasWon && !hasLost) {
      setGuessList([...guessList, currentGuess]);
      setCurrentGuess();
    }
  };

  const handleNewGame = () => {
    setGuessList([]);
    setSecretCode();
    setCurrentGuess();
    generateSecretCode();
    setShowModal(false);
  };

  const renderGame = () => (
    <>
      <GuessList
        currentGuess={currentGuess}
        guessList={guessList}
        feedbackList={guessList.map((guess) => createFeedback(guess, secretCode))}
        maxTurns={maxTurns}
        secretCodeLength={secretCodeLength} />
      <Keyboard
        keys={codes}
        onChange={handleGuessChange}
        onEnter={handleGuessSubmit}
        size={secretCodeLength} />
    </>
  );

  const renderModal = () => {
    let modalContent;

    if (zeroState || isPlaying) {
      modalContent = <Rules onStartGame={handleNewGame} />;
    };
    if (hasWon || hasLost) {
      modalContent = (
        <Gameover
          onStartGame={handleNewGame}
          hasWon={hasWon}
          secretCode={secretCode}
          guessList={guessList} />
      );
    }

    return (
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {modalContent}
      </Modal>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.title}
          onClick={() => setShowModal(true)}>
          Mastermind
          <span className="material-icons material-icons-outlined">
            help_outline
          </span>
        </button>
      </header>
      <div className={styles.game}>
        {isLoading && (<div className={styles.loadingIndicator}>...LOADING...</div>)}
        {secretCode && renderGame()}
      </div>
      {renderModal()}
    </>
  );
};

export default Game;
