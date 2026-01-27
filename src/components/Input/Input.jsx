import React from 'react'
// import { validateField } from '../../utils/validations'

const Input = ({ id, label, type, handleChange, value, ...props }) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={({ target }) => setForm(prevForm => ({
          ...prevForm,
          [target.id]: target.value
        }))}
        {...props}
      />
    </>

  )
}

export default Input