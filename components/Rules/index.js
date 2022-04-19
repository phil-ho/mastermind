import React from 'react';
import styles from './rules.module.css';

const Rules = ({onStartGame}) => (
  <div className={styles.rules} role="dialog">
    <h2 className={styles.title}>The Rules</h2>
    <p>
      You have 10 tries to guess the secret 4-digit code!
    </p>

    <span>
      After each guess the computer will give you feedback on your guess!
    </span>
    <ul className={styles.feedbackTypes}>
      <li attr-data={2} className={styles.feedbackIcon}> - a correct number in the correct spot!</li>
      <li attr-data={1} className={styles.feedbackIcon}> - a correct number but in the wrong spot</li>
      <li attr-data={0} className={styles.feedbackIcon}> - an incorrect guess</li>
    </ul>


    <button className={styles.startButton} onClick={onStartGame}>
      New Game
    </button>
  </div>
);

export default Rules;
