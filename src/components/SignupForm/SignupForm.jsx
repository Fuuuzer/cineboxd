import React from 'react'
import './SignupForm.css'
import { validateField } from '../../utils/validations'
import Input from '../Input/Input';

export const FormSignUp = ({ onSuccess }) => {
  const [submit, setSubmit] = React.useState(false)
  const [form, setForm] = React.useState({
    email: '',
    user: '',
    password: ''
  });
  const [errors, setErrors] = React.useState({
    email: '',
    user: '',
    password: ''
  })

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));

  }

  return (
    <form action="">
      <div>
        <Input onChange={(e) => handleChange('email', e.target.value)} error={errors.email} label='Email' id='email' type='email' value={form.email} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <Input onChange={(e) => handleChange('user', e.target.value)} error={errors.user} label='Usuário' id='user' type='text' value={form.user} />
        {errors.user && <p className="error">{errors.user}</p>}
      </div>

      <div>
        <Input onChange={(e) => handleChange('password', e.target.value)} error={errors.password} label='Senha' id='password' type='password' value={form.password} />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button id='btn-form' onClick={(e) => {
        e.preventDefault();
        setSubmit(true);
        const errorMessage = validateField(field, value);
        if (submit) setErrors(prev => ({ ...prev, [field]: errorMessage }));
        console.log('oi')
        const validationResult = validateField(form);
        if (validationResult === true) {
          onSuccess()
        }
      }}>Inscrever-se</button>
    </form>
  )
}
