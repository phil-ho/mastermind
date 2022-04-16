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
        <div className={styles.guessListItem} key={index}>
          <Guess guess={guess} secretCodeLength={secretCodeLength} />
          <Feedback
            key={`feedback${index}`}
            size={secretCodeLength}
            full={feedback.fullMatch}
            partial={feedback.partialMatch} />
        </div>
      )
    });
  };

  const renderCurrentGuess = () => {
    const currentEle = (<div className={styles.guessListItem}>
      <Guess guess={currentGuess} secretCodeLength={secretCodeLength} />
    </div>);

    const turnsLeft = maxTurns - guessList.length;
    return turnsLeft > 0 ? currentEle : undefined;
  };

  const renderBlankGuesses = () => {
    const turnsLeft = maxTurns - guessList.length;
    const numBlanks = (turnsLeft > 1) ? turnsLeft - 1 : 0;

    const blanks = [];
    for (let i = 0; i < numBlanks; i++) {
      blanks.push(
        <div className={styles.guessListItem} key={i}>
          <Guess

            secretCodeLength={secretCodeLength} />
        </div>
      );
    }
    return blanks;
  };

  const renderListItems = () => {

    const guessElements = renderPastGuesses()
      .concat(renderCurrentGuess())
      .concat(renderBlankGuesses());

    return (
      <>
        {guessElements}
      </>
    );
  };

  return (
    <div className={styles.guessList}>
      {renderListItems()}
    </div>
  )
};

export default GuessList;
