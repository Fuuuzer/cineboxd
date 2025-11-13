import React from 'react'
import './Modal.css'
import { FormSignUp } from '../FormSignUp/FormSignUp';

const Modal = ({ ativo, onClose }) => {

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);


  return (
    <>
      {ativo && < div className="modal" >
        <div className='modal-header'>
          <h2>Entre no cineboxd</h2>
          <button aria-label='Fechar' onClick={onClose}>X</button>
        </div>
        <FormSignUp />
      </div>}
    </>
  )
}

export default Modal