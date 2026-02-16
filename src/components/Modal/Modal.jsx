import React from 'react'
import './Modal.css'
import { FormSignUp } from '../SignupForm/SignupForm';
import Button from '../ButtonForm/Button';
import { validateForm } from '../../utils/validations';
import { supabase } from '../../utils/supabaseClient';

const Modal = ({ ativo, onClose }) => {
  const [errors, setErrors] = React.useState({});
  const [form, setForm] = React.useState({
    email: '',
    user: '',
    password: ''
  });
  function handleSucess() {
    onClose()
  }

  const handleSignup = async () => {
    const validationResult = validateForm(form);
    setErrors(validationResult)
    const hasErrors = Object.values(validationResult).some(msg => msg !== "");

    if (hasErrors) return
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          username: form.user,
        }
      }
    })

    if (error) {
      setErrors({ api: error.message })
      return
    }
    handleSucess()
    console.log("Sucesso! Verifique seu e-mail.", data);
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
        <Button handleSignup={handleSignup} />
        <p className='modal-have-account'>Já possui conta? <a href="" >Entrar</a></p>
      </div>}
    </>

  )
}
export default Modal