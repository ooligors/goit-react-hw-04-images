import React from 'react';
import css from './Loader.module.css';

import { FiLoader } from 'react-icons/fi';

export const Loader = () => (
  <div className={css.loader}>
    <FiLoader size={70} color="blue" aria-label="more-loader" />
  </div>
);
