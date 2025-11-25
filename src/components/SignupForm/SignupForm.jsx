import React from 'react'
import { validateForm } from '../../utils/validations'
import Input from '../Input/Input';

export const FormSignUp = ({ onSuccess }) => {
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

  return (
    <form action="">
      <div>
        <Input label='Email' id='email' type='email' value={form.email} setValue={setForm} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <Input label='Usuário' id='user' type='text' value={form.user} setValue={setForm} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <Input label='Senha' id='password' type='password' value={form.password} setValue={setForm} />
      </div>

      <button id='btn-form' onClick={(e) => {
        e.preventDefault();
        if (validateForm(form)) {
          console.log('Cadastro validado com sucesso!')
          onSuccess()
        }
      }}>Inscrever-se</button>
    </form>
  )
}
