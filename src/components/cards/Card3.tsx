import React from 'react'
import Image from 'next/image'
import event2 from '@/components/event2.webp'

function Card3() {
  return (
    <div className='bg-orange-100 w-[280px]'>
        <p className='pt-4 pl-4'>
        Flex Sweatshirt<br/><s>$100.00</s><b> $75.00</b>
        </p>
        <Image src={event2} alt='photo'/>
    </div>
  )
}

export default Card3