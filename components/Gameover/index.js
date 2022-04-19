import React from 'react';
import clsx from 'clsx';
import styles from './gameover.module.css';

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

export default Gameover;
