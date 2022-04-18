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
    <div className={styles.gameover}>
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
        <h2 className={styles.turnsNum}>{guessList.length}</h2>
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
