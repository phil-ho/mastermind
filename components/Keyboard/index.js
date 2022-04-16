import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './keyboard.module.css';

const Keyboard = ({
  keys,
  size,
  onEnter,
  onChange,
}) => {
  const [keyPresses, setKeyPresses] = useState([]);
  const handleKeypress = (key) => {
    if (keyPresses.length < size) {
      const newValue = [...keyPresses, key];
      onChange(newValue);
      setKeyPresses(newValue);
    }
  };
  const handleBackspace = () => {
    const newValue = keyPresses.slice(0,-1);
    onChange(newValue);
    setKeyPresses(newValue);
  }
  const handleEnter = () => {
    if (keyPresses.length >= size) {
      onEnter();
      setKeyPresses([]);
    }
  }

  const renderKeys = () => {
    return keys.map((key) => (
      <button
        className={clsx(styles.key)}
        key={key}
        onClick={() => handleKeypress(key)}>
          {key}
      </button>
    ));
  };

  return (
    <div className={styles.keyboard}>
      <button className={clsx(styles.key, styles.enter)} onClick={handleEnter}>Enter</button>
      {renderKeys()}
      <button className={clsx(styles.key, styles.back)} onClick={handleBackspace}>Backspace</button>
    </div>
  )
};

export default Keyboard;
