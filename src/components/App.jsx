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
import { useEffect, useState, useCallback } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [img, setLargeImg] = useState('');

  const fetchImages = useCallback(() => {
    setLoading(true);

    getImages(query, page)
      .then(data => {
        setCollection(prevCollection => [
          ...prevCollection,
          ...mapperImgs(data.data.hits),
        ]);
        setLoading(false);
      })
      .catch(error => this.setState({ error }));
  }, [query, page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const HandleSearchbarSubmit = query => {
    setQuery(query);
    setPage(1);
    setCollection([]);
    setLoading(true);
  };
  const setCurrentImg = url => {
    setLargeImg(url);
  };
  const toggleModal = () => {
    if (showModal) {
    }
    setShowModal(!showModal);
  };
  const onClickLoadMore = () => {
    setPage(page + 1);
  };

  const closeModal = () => {
    setLargeImg('');
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={HandleSearchbarSubmit} />

      {collection.length > 0 && (
        <ImageGallery
          collection={collection}
          onLiClick={toggleModal}
          setCurrentImg={setCurrentImg}
        />
      )}
      {loading && <Loader />}
      {img && <Modal img={img} onClose={toggleModal} onCloses={closeModal} />}

      {collection.length > 11 && (
        <Button onClickLoadMore={onClickLoadMore}>Load more</Button>
      )}

      {collection.length === 0 && query && page === 1 && !loading ? (
        <div className={css.info}>
          <h3>Something went wrong - there are no result with` ${query} `</h3>
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
};
