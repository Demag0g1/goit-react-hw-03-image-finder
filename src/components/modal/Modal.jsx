import React from 'react';
import styles from './Modal.module.css';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

const Modal = ({ selectedImage, isOpen, onClose, imageUrl }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.Overlay}
      className={styles.Modal}
    >
      <img src={imageUrl} alt={selectedImage.tags} />
    </ReactModal>
  );
};

Modal.propTypes = {
  selectedImage: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string
};

export default Modal;