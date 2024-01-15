import React from 'react'
import { Button } from '../ui/button'


function Card2() {
  return (
    <div className='text-center bg-zinc-900 text-white h-[200px] w-[530px] pt-12'>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
      GET 30% Off
    </h1>
    <p className='pt-2'>USE PROMO CODE</p>
    <Button className='bg-zinc-600 hover:bg-zinc-600 w-80 text-wrap text-lg'>D I N E W E E K E N D S A L E</Button>
    </div>
  )
}

export default Card2