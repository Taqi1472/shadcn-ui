'use client'
import React from 'react'
import { useState } from 'react'

function Quantity() {
    const [num,setnum]=useState(1)
    
  return (
    <div className='flex gap-x-4'>
        <button className='h-6 w-6 border rounded-full center'
        onClick={()=>{
            setnum(num<=1 ? 1 : num-1 )
        }}
        >
            -
        </button>
        <span>
            {num}
        </span>
        <button className='h-6 w-6 border rounded-full center'
        onClick={()=>{
            setnum(num+1)
        }}
        >
            +
        </button>
    </div>
  )
}

export default Quantity