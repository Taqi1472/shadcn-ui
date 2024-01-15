import Image from 'next/image'
import React from 'react'
import event1 from '@/components/event1.webp'
import { Button } from '@/components/ui/button'
import event2 from '@/components/event2.webp'
import event3 from '@/components/event3.webp'
import Card1 from '@/components/cards/Card1'
import Card2 from '@/components/cards/Card2'
import Card3 from '@/components/cards/Card3'
import Card4 from '@/components/cards/Card4'

function Promotions() {
  return (
    <section className='flex flex-col justify-evenly lg:flex-row mt-8'>
      <div className='flex flex-col gap-4'>
      <Card1/>
      <Card2/>
      </div>
      <div className='flex flex-col lg:flex-row gap-4'>
      <Card3/>
      <Card4/>
      </div>
    </section>
  )
}

export default Promotions