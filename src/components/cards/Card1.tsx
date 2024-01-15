import React from 'react'
import event1 from '@/components/event1.webp'
import Image from 'next/image'

function Card1() {
  return (
    <div className='flex bg-neutral-300 items-center w-[530px]'>
      {/*Left side*/}
      <div className='pl-12'>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      GET UP TO
      </h2>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
      60%
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-0">
      For the summer<br/> season
    </p>
      </div>
      {/*Right side*/}
      <div>
        <Image src={event1} alt='photo' />
      </div>
    </div>
  )
}

export default Card1