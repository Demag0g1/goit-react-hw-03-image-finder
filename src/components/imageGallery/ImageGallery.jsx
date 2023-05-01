import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import Modal from 'react-modal';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    isOpen: false,
    selectedImage: null
  };

  openModal = (image) => {
    this.setState({
      isOpen: true,
      selectedImage: image
    });
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
      selectedImage: null
    });
  }

  render() {
    const { images } = this.props;
    const { isOpen, selectedImage } = this.state;

    return (
      <>
        <ul className={styles.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={() => this.openModal(image)}
            />
          ))}
        </ul>
        <Modal isOpen={isOpen} onRequestClose={this.closeModal}>
          {selectedImage && (
            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
          )}
        </Modal>
      </>
    );
  }
}

export default ImageGallery;

