import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';

const Modal = ({children, isOpen, onClose}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleBackgroundClick = (e) => {
    e.stopPropagation();
    onClose();
  }

  const handleChildClick = (e) => {
    e.stopPropagation();
  }

  const modalContainer = isOpen && (
    <div className={styles.modal} onClick={handleBackgroundClick}>
      <div className={styles.childrenContainer} onClick={handleChildClick}>
        {children}
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContainer,
      document.getElementById('portal')
    );
  } else {
    return null;
  }
}

export default Modal;
