import React from 'react'

const Button = ({colorRandom, randomGeneral}) => {
    
  return (
    <button
        style={{background: colorRandom}} 
        className='button-random'
        onClick={randomGeneral}
    >&#62;</button>
  )
}

export default Button