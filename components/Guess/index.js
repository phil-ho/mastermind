import React from 'react';
import clsx from 'clsx';
import styles from './guess.module.css';


const Guess = ({ guess, secretCodeLength }) => {

  const renderCodeTiles = () => {
    const tiles = [];
    for (let i = 0; i < secretCodeLength; i++) {
      const val = Array.isArray(guess) ? guess[i] : '';
      const tileStyles = clsx({
        [styles.codeTile]: true,
        [styles.hasValue]: val,
      });
      tiles.push((
        <div key={i} className={tileStyles}>{val}</div>
      ))
    }
    return tiles;
  }

  return (
    <>
      {renderCodeTiles()}
    </>
  )
};

export default Guess;
