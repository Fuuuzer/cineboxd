import React from 'react'
import './Modal.css'
import { FormSignUp } from '../SignupForm/SignupForm';
import Button from '../ButtonForm/Button';

const Modal = ({ ativo, onClose }) => {
  const [errors, setErrors] = React.useState({});
  const [submit, setSubmit] = React.useState(false)
  const [form, setForm] = React.useState({
    email: '',
    user: '',
    password: ''
  });
  function handleSucess() {
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
        <FormSignUp form={form} setForm={setForm} errors={errors} />
        <Button onSuccess={handleSucess} form={form} errors={errors} setErrors={setErrors} setSubmit={setSubmit} />
        <p className='modal-have-account'>Já possui conta? <a href="" >Entrar</a></p>
      </div>}
    </>

  )
}
export default Modal