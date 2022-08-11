import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';

export class Searchbar extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };
  handleNameChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query) {
      toast.error('Введiть будь ласка пошукове слово');
      // alert('Введите название ');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={css.header}>
        <form className={css.form} onSubmit={this.handleSubmit}>
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
            value={this.state.query}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
