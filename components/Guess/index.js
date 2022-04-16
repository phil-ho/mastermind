import React from 'react';
import styles from './guess.module.css';

const Guess = ({ guess, secretCodeLength }) => {

  const renderCodeTiles = () => {
    const tiles = [];
    for (let i = 0; i < secretCodeLength; i++) {
      const val = Array.isArray(guess) ? guess[i] : '';
      tiles.push((
        <div key={i} className={styles.codeTile}>{val}</div>
      ))
    }
    return tiles;
  }

  return (
    <div className={styles.guess}>
      {renderCodeTiles()}
    </div>
  )
};

export default Guess;
