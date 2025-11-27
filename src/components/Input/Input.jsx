import React from 'react'

const Input = ({ id, label, type, onChange, value, ...props }) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>

  )
}

export default Input