import React from 'react';
import Guess  from '../Guess';
import Feedback from '../Feedback';

import styles from './guessList.module.css';

const GuessList = ({
  currentGuess,
  feedbackList,
  guessList,
  maxTurns,
  secretCodeLength,
}) => {

  const renderPastGuesses = () => {
    return guessList.map((guess, index) => {
      const feedback = feedbackList[index];
      return (
        <li className={styles.guessListItem} key={index}>
          <Guess guess={guess} secretCodeLength={secretCodeLength} />
          <Feedback
            key={`feedback${index}`}
            size={secretCodeLength}
            full={feedback.fullMatch}
            partial={feedback.partialMatch} />
        </li>
      )
    });
  };

  const renderCurrentGuess = () => {
    const currentEle = (<li className={styles.guessListItem}>
      <Guess guess={currentGuess} secretCodeLength={secretCodeLength} />
      <Feedback
        size={secretCodeLength}
        isHidden={true} />
    </li>);

    const turnsLeft = maxTurns - guessList.length;
    return turnsLeft > 0 ? currentEle : undefined;
  };

  const renderBlankGuesses = () => {
    const turnsLeft = maxTurns - guessList.length;
    const numBlanks = (turnsLeft > 1) ? turnsLeft - 1 : 0;

    const blanks = [];
    for (let i = 0; i < numBlanks; i++) {
      blanks.push(
        <li className={styles.guessListItem} key={i}>
          <Guess secretCodeLength={secretCodeLength} />
          <Feedback
            size={secretCodeLength}
            isHidden={true} />
        </li>
      );
    }
    return blanks;
  };

  return (
    <ul className={styles.guessList}>
      {renderPastGuesses()}
      {renderCurrentGuess()}
      {renderBlankGuesses()}
    </ul>
  )
};

export default GuessList;
