import React from 'react';
import getImages from 'Api/api';
import { mapperImgs } from 'helpers/mappers';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends React.Component {
  state = {
    page: 1,
    query: '',
    loading: false,
    collection: [],
    error: null,
    // status: 'idle',
    img: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({ loading: true });
    const { page, query } = this.state;
    getImages(query, page)
      .then(data => {
        console.log(data);
        if (data.data.hits.length === 0 && this.state.query) {
          this.setState({ status: 'rejected' });
        }
        console.log(data.data.hits);
        this.setState(prevState => ({
          collection: [...prevState.collection, ...mapperImgs(data.data.hits)],
          // status: 'resolved',
          loading: false,
        }));
      })

      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  HandleSearchbarSubmit = query => {
    this.setState({ query, collection: [], page: 1, loading: true });
  };
  setCurrentImg = url => {
    this.setState({ img: url });
  };
  toggleModal = () => {
    if (this.state.showModal) {
    }

    this.setState({
      showModal: !this.state.showModal,
    });
  };
  onClickLoadMore = () => {
    console.log('this.state.page', this.state.page);
    console.log('prevState.page', this.state.page + 1);
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  closeModal = () => {
    this.setState({ img: '' });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.HandleSearchbarSubmit} />
        
        {this.state.collection.length > 0 && (
          <ImageGallery
            collection={this.state.collection}
            onLiClick={this.toggleModal}
            setCurrentImg={this.setCurrentImg}
          />
        )}
        {this.state.loading && <Loader />}
        {this.state.img && (
          <Modal
            img={this.state.img}
            onClose={this.toggleModal}
            onCloses={this.closeModal}
          />
        )}

        {this.state.collection.length > 11 && (
          <Button onClickLoadMore={this.onClickLoadMore}>Load more</Button>
        )}

        {this.state.collection.length === 0 &&
        this.state.query &&
          this.state.page === 1 &&
          !this.state.loading
          ? (     <div className={css.info}>
            <h3>
              Something went wrong - there are no result with` $
              {this.state.query} `
            </h3>
            <img
              width="295"
              src="https://static5.depositphotos.com/1001911/508/v/950/depositphotos_5080703-stock-illustration-sad-emoticon.jpg"
              alt="sad smile"
            />
          </div>
        ) : null}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
