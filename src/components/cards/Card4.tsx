import React from 'react'
import Image from 'next/image'
import event3 from '@/components/event3.webp'

function Card4() {
  return (
    <div className='bg-neutral-200 w-[280px]'>
        <p className='pt-4 pl-4'>
        Flex Push Button Bomber<br/>
        <s>$225.00</s>  <b>$190.00</b>
        </p>
        <Image src={event3} alt='photo' />
    </div>
  )
}

export default Card4