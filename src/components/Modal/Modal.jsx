import React from 'react';
// import { createPortal } from "react-dom";
import { PropTypes } from 'prop-types';
import css from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeClick);

    // this.props.onClose();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeClick);
  }
  handleEscapeClick = e => {
    if (e.code === 'Escape') {
      console.log('Я люблю Колю і Аню');
      this.props.onCloses();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      console.log('Я люблю Колю і Аню');
      this.props.onCloses();
    }
  };

  render() {
    return (
      <div className={css.backdrop} onClick={this.handleBackdropClick}>
        <div className="css.modal">
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
}
