import React from 'react'
import { validateField } from '../../utils/validations'
import { validateForm } from '../../utils/validations';
import Input from '../Input/Input';
import { supabase } from '../../utils/supabaseClient';

export const FormSignUp = ({ onSuccess }) => {
  const [submit, setSubmit] = React.useState(false)
  const [form, setForm] = React.useState({
    email: '',
    user: '',
    password: ''
  });
  const [errors, setErrors] = React.useState({})

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  return (
    <form action="">
      <div>
        <Input onChange={(e) => handleChange('email', e.target.value)} label='Email' id='email' type='email' value={form.email} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <Input onChange={(e) => handleChange('user', e.target.value)} label='Usuário' id='user' type='text' value={form.user} />
        {errors.user && <p className="error">{errors.user}</p>}
      </div>

      <div>
        <Input onChange={(e) => handleChange('password', e.target.value)} label='Senha' id='password' type='password' value={form.password} />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

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
    </form>
  )
}
