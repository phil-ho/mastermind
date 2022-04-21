import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';

/**
 * app-wide modal
 */
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
      <div className={styles.container}>
        <div className={styles.childrenContainer} onClick={handleChildClick}>
          {children}
        </div>
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

Modal.propTypes = {
  /**
   * children to render in modal
   */
  children: PropTypes.node,
  /**
   * true to show the modal, false to hide
   */
  isOpen: PropTypes.bool,
  /**
   * function to close modal, for background clicks
   */
  onClose: PropTypes.func,
};

export default Modal;
