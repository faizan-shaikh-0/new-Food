import React from 'react'

function Input({id,label,require, ...props}) {
  return (
    <p className='control'>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id}  {...props}/>
    </p>
  )
}

export default Input;
