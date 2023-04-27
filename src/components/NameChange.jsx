import './Name.css'
import React from 'react'
import { useState } from 'react'

export default function NameChange() {

  const[message, setMessage] = useState('***');
  const[updte, setUpdte] = useState('')

  function handleChange(event){
    setUpdte(event.target.value)
  }
  function handleClick(){
    setMessage(updte)
     setUpdte('')
  }

  return (
    <div className='ss'>
       
      <input
     className='text'
      type="text" placeholder='Add your name' onChange={handleChange}/> 
      <button className='btn'  onClick={handleClick}>submit</button>
      <h2>Hi.. May Name is: {message}</h2>
    </div>
  )
}