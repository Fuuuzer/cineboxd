import React from 'react'

const Input = ({ id, label, type, setValue, value }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={({ target }) => { setValue(target.value); console.log(target.value) }}
      />
    </>

  )
}

export default Input