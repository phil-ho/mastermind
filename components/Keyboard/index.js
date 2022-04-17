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

  const returnButton = (
    <button
      className={clsx(styles.key, styles.enter)}
      disabled={keyPresses.length < size}
      onClick={handleEnter}>
        <span className="material-icons material-icons-outlined">
          keyboard_return
        </span>
    </button>
  );

  const backspaceButton = (
    <button
      className={clsx(styles.key, styles.back)}
      disabled={!keyPresses.length > 0}
      onClick={handleBackspace}>
        <span className="material-icons material-icons-outlined">
          backspace
        </span>
    </button>
  );

  return (
    <div className={styles.keyboard}>
      {returnButton}
      <div className={styles.keyboardKeys}>
        {renderKeys()}
      </div>
      {backspaceButton}
    </div>
  )
};

export default Keyboard;
