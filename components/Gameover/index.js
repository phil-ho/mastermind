import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './gameover.module.css';

/**
 * Modal for the end of game state (win or loss). Displays the secret code,
 * the number of turns the Player took, and a button to start a new game
 */
const Gameover = ({onStartGame, hasWon, guessList=[], secretCode=[]}) => {

  const titleStyle = clsx({
    [styles.title]: true,
    [styles.hasWon]: hasWon,
    [styles.hasLost]: !hasWon,
  });

  const titleText = hasWon ? 'You Win!' : 'Game Over';

  return (
    <div className={styles.gameover} role="dialog">
      <h2 className={titleStyle}>{titleText}</h2>

      <ul className={styles.showSecretList}>
        {secretCode.map((code, index) => (
          <li className={styles.showSecretListItem} key={index}>
            {code}
          </li>
        ))}
      </ul>

      <div className={styles.turnsTaken}>
        <span>You Took</span>
        <span className={styles.turnsNum}>{guessList.length}</span>
        <span className={styles.turnsLabel}>Turns</span>
      </div>

      <p>Maybe a way to share?</p>

      <button className={styles.newGameButton} onClick={onStartGame}>
        New Game
      </button>
    </div>
  );
};

Gameover.propTypes = {
  /**
   * callback when "New Game" Button is clicked
   */
  onStartGame: PropTypes.func,
  hasWon: PropTypes.bool,
  guessList: PropTypes.array,
  secretCode: PropTypes.array,
};

export default Gameover;
