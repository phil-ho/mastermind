import React from 'react';
import styles from './guess.module.css';

const GuessList = ({ guess }) => {
  return (
    <div className={styles.guess}>
      {guess.join('')}
    </div>
  )
};

export default GuessList;
