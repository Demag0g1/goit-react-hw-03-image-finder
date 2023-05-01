import React from 'react';
import styles from './Modal.module.css';
import {selectedImage,imageUrl } from '../imageGallery/ImageGallery';


const Modal = ({ selectedImage,isOpen, onClose, imageUrl }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.Overlay} onClick={onClose} style={customStyles}>
      <div className={styles.Modal}>
      <img src={selectedImage.imageUrl} alt={selectedImage.tags} />
      </div>
    </div>
  );
};

export default Modal;



// let ModWin = () => {
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div>
//       <button onClick={openModal}></button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <button onClick={closeModal}>close</button>
//       </Modal>
//     </div>
//   );
// };
// export default ModWin;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



