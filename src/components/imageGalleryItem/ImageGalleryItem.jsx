import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, tags, onClick }) => (
  <li
    className={styles.ImageGalleryItem}
    onClick={onClick}
  >
    <img
      className={styles['ImageGalleryItem-image']}
      src={image.webformatURL}
      alt={tags}
    />
  </li>
);

export default ImageGalleryItem;
