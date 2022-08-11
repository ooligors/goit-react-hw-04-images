import React from 'react';
import css from './Loader.module.css';

import { FiLoader } from 'react-icons/fi';
export const Loader = () => (
  <div className={css.loader}>
    <FiLoader height="875" width="875" color="blue" aria-label="more-loader" />
  </div>
);
