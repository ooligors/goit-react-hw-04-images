import React from 'react';
import { PropTypes } from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClickLoadMore }) => {
  return (
    <button className={css.button} onClick={onClickLoadMore}>
      Load more...
    </button>
  );
};
Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
