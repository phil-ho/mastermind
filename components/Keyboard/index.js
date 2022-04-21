import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './keyboard.module.css';

/**
 * renders on-screen keyboad of keys for Player to build, edit, and submit their guess
 * onChange is fired with all keys in state
 * onEnter is final callback to "submit" guess and will clear the state
 */
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

Keyboard.propTypes = {
  /**
   * array of values that can be in the secretCode
   */
  keys: PropTypes.array,
  /**
   * the length of the secretCode / size of guess to build
   */
  size: PropTypes.number,
  /**
   * for submitting all the keys pressed (the guess)
   * callback is invoked when clicking on the green return button
   * callback is not invoked when length of keyPresses is less than size
   * keyPresses Array is reset after onEnter is invoked
   */
  onEnter: PropTypes.func,
  /**
   * callback called every time the array of values making up the guess changes
   * onChange: (keys: string[]) => void
   */
  onChange: PropTypes.func,
};

export default Keyboard;
