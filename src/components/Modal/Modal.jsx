import React from 'react'
import './Modal.css'
import { FormSignUp } from '../SignupForm/SignupForm';

const Modal = ({ ativo, onClose, onSuccess }) => {

  function onSuccess() {
    onClose()
  }

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
        <FormSignUp onSuccess={onSuccess} />
        <p className='modal-have-account'>Já possui conta? <a href="" >Entrar</a></p>
      </div>}
    </>

  )
}
export default Modal