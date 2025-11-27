import React from 'react'
import { validateForm } from '../../utils/validations'
import Input from '../Input/Input';

export const FormSignUp = () => {
  const [form, setForm] = React.useState({
    email: '',
    user: '',
    password: ''
  });

  return (
    <form action="">
      <div>
        <p>{form.email}</p>
        <Input label='Email' id='email' type='email' value={form.email} setValue={setForm} />
      </div>

      <div>
        <Input label='Usuário' id='user' type='text' value={form.user} setValue={setForm} />
      </div>

      <div>
        <Input label='Senha' id='password' type='password' value={form.password} setValue={setForm} />
      </div>

      <button id='btn-form' onClick={(e) => { e.preventDefault(); validateForm() }}>Inscrever-se</button>
    </form>
  )
}
