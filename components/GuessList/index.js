import React from 'react';
import Guess  from '../Guess';
import styles from './guessList.module.css';

const GuessList = ({ guesses }) => {
  return (
    <div className={styles.guessList}>
      {guesses.map((guess, index) => <Guess guess={guess} key={index}/>)}
    </div>
  )
};

export default GuessList;
