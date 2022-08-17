import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  // state = {
  //   query: '',
  // };

  const handleNameChange = e => {
    setQuery(e.target.value.toLowerCase());
    // this.setState({ query: e.target.value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      toast.error('Введiть будь ласка пошукове слово');

      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="Submit">
          <FcSearch className={css.icon} />
        </button>

        <input
          className={css.input}
          type="text"
          placeholder="Search images and photos"
          name="img"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
