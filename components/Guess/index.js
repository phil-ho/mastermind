import React from 'react';
import styles from './guess.module.css';

const Guess = ({ guess }) => {
  return (
    <div className={styles.guess}>
      {guess.join('')}
    </div>
  )
};

export default Guess;
