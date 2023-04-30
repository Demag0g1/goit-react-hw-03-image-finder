import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  render() {
    const { title, subtitle, largeImageUrl } = this.props;

    return (
      <div>
        <li className={styles.ImageGalleryItem}>
          <img className={styles['ImageGalleryItem-image']} src={largeImageUrl} alt={title} />
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </li>
      </div>
    );
  }
}

export default ImageGalleryItem;
