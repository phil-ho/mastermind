import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './guess.module.css';

/**
 * The guess component renders a single guess made up of secretCodeLength Tiles.
 */
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
        <div key={i} className={tileStyles} data-testid='guess-tile'>{val}</div>
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

Guess.propTypes = {
  guess: PropTypes.array,
  secretCodeLength: PropTypes.number.isRequired,
};

export default Guess;
