import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, tags, onClick }) => (
  <li className={styles.ImageGalleryItem} onClick={onClick}>
    <img
      className={styles['ImageGalleryItem-image']}
      src={image.webformatURL}
      alt={tags}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
