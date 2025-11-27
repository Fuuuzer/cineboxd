import React from 'react'

const Input = ({ id, label, type, setValue, value, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={({ target }) => setValue(prevForm => ({
          ...prevForm,
          [target.id]: target.value
        }))}
        {...props}
      />
    </>

  )
}

export default Input