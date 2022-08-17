import React from 'react';
// import { createPortal } from "react-dom";
import { PropTypes } from 'prop-types';
import css from './Modal.module.css';
import { useEffect } from 'react';
import { useCallback } from 'react';

// const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ img, onCloses }) => {
  const handleEscapeClick = useCallback(
    e => {
      if (e.code === 'Escape') {
        onCloses();
      }
    },
    [onCloses]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClick);
    return () => {
      window.removeEventListener('keydown', handleEscapeClick);
    };
  }, [handleEscapeClick]); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onCloses();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className="css.modal">
        <img src={img} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onCloses: PropTypes.func.isRequired,
};
