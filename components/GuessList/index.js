import React from 'react';
import Guess  from '../Guess';
import Feedback from '../Feedback';

import styles from './guessList.module.css';

const GuessList = ({
  feedbackList,
  guessList,
}) => {
  const renderListItems = () => {
    return guessList.map((guess, index) => {
      const feedback = feedbackList[index];
      return (
        <div className={styles.guessListItem} key={index}>
          <Guess guess={guess} />
          <Feedback
            key={`feedback${index}`}
            size={guess.length}
            full={feedback.fullMatch}
            partial={feedback.partialMatch} />
        </div>
      )
    });
  }

  return (
    <div className={styles.guessList}>
      {renderListItems()}
    </div>
  )
};

export default GuessList;
