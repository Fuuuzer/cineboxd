import React from 'react'
import './Button.css'


const Button = ({ handleSignup }) => {
  return (
    <button id='btn-form' onClick={(e) => {
      e.preventDefault();
      handleSignup()
    }}>Inscrever-se</button>
  )
}

export default Button