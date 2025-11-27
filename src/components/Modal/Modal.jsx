import React from 'react'
import './Modal.css'
import { FormSignUp } from '../SignupForm/SignupForm';

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
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input on type="email" id='email' />
          </div>

          <div>
            <label htmlFor="username">Usuário</label>
            <input type="text" id='username' />
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' />
          </div>

          <button id='btn-form' onClick={(e) => { e.preventDefault(); validateForm() }}>Inscrever-se</button>
        </form>
      </div>}

      <FormSignUp />
    </>

  )
}
export default Modal