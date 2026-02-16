import React from 'react'
import './Button.css'


const Button = ({ handleSignup, disabled }) => {
  return (

    <button id='btn-form' disabled={disabled} onClick={(e) => {
      e.preventDefault();
      handleSignup()
    }}>Inscrever-se</button>
  )
}

export default Button