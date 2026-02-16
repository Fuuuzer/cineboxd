import React from 'react'
import './Button.css'
import { validateForm } from '../../utils/validations';
import { supabase } from '../../utils/supabaseClient';

const Button = ({ onSuccess, form, setErrors, setSubmit }) => {
  return (
    <button id='btn-form' onClick={async (e) => {
      e.preventDefault();
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
      console.log({ data, error })

      setSubmit(true);
      if (error) {
        setErrors({ api: error.message })
        return
      }
      console.log("Sucesso! Verifique seu e-mail.", data);
      onSuccess()
    }}>Inscrever-se</button>
  )
}

export default Button