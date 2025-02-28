import React from 'react'

const Button = ({ color='primary', sx, onClick, children='Submit' }) => {
  return (
    <button
    type="submit"
    className={ `btn btn-${color} submit-form me-2` }
    style={sx}
    onClick={onClick}
  >
    { children }
  </button>
  )
}

export default Button
