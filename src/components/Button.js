import React from 'react'

const Button = ({openModal, children}) => {
  return (
    <button className='button' onClick={openModal} >
      {children}
    </button>
  )
}

export default Button
