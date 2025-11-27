import React from 'react'
<<<<<<< HEAD

const Input = ({ id, label, type, setValue, value, ...props }) => {
=======
import { validateField } from '../../utils/validations'

const Input = ({ id, label, type, onChange, value, ...props }) => {
>>>>>>> 0b4999141c9eb628f7de0207d93109ac2e3aa150
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
<<<<<<< HEAD
        onChange={({ target }) => setValue(prevForm => ({
          ...prevForm,
          [target.id]: target.value
        }))}
=======
        onChange={onChange}
>>>>>>> 0b4999141c9eb628f7de0207d93109ac2e3aa150
        {...props}
      />
    </>

  )
}

export default Input