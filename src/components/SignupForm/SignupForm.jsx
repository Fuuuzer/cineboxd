import React from 'react'
import Input from '../Input/Input';

export const FormSignUp = ({ onSuccess, form, setForm, errors, setErrors }) => {
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
    </form>
  )
}
