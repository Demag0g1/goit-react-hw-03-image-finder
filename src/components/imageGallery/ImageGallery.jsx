import React from 'react';
import styles from  './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <li key={image.id}>
          <img src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
