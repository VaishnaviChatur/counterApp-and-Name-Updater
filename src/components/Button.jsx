import React from 'react'
import './Button.css'
import { useState } from 'react'
export default function Button() {

    let [data,setData]=useState(1)
    function onClickUp() {
        setData(data+1)
        
    
      }
      function onClickDown(){
    
        setData(data-1)
        if(data===0){
          setData(0)
          alert('you can not decress')
        }
      }
  return (
    <div className='ccco'>
        <p className='teco'>{data}</p>
      <button className='btn' onClick={onClickUp}>
      To decrease
      </button>
      <br></br>
      <button  className='btn' onClick={onClickDown}>To Increase</button>
    </div>
  )
}
