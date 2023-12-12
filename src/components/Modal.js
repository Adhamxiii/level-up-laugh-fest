import React from 'react';
import { useOutsideClick } from '../hook/useOutsideClick';

const Modal = ({ isOpen, closeModal, title, content, children }) => {
  const ref = useOutsideClick(closeModal);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content" ref={ref}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
