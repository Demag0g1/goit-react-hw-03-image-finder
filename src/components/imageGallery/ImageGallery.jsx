import React from 'react';
import styles from './ImageGallery.module.css';
import styl from '../imageGalleryItem/ImageGalleryItem.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <li className={styl.ImageGalleryItem} key={image.id}>
          <img className={styl['ImageGalleryItem-image']} src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
