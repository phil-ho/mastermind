import React, {useState} from 'react';
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

  return (
    <div className={styles.keyboard}>
      <button onClick={handleEnter}>Enter</button>
      {keys.map((key) => (<button key={key} onClick={() => handleKeypress(key)}>{key}</button>))}
      <button onClick={handleBackspace}>Backspace</button>
    </div>
  )
};

export default Keyboard;
