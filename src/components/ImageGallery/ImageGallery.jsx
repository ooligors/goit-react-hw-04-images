import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import PropTypes from 'prop-types';
// import { cssTransition } from 'react-toastify';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ collection, setCurrentImg, onClose }) => {
  return (
    <ul className={css.imageGallery}>
      {collection.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          setCurrentImg={setCurrentImg}
          onClose={onClose}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatUrl: PropTypes.string,
      largeImageURL: PropTypes.string,
    }).isRequired
  ).isRequired,
  setCurrentImg: PropTypes.func.isRequired,
};
