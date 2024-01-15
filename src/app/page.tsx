import Image from 'next/image'
import Hero from '@/views/hero'
import Productlist from '@/views/Productlist'
import Promotions from '@/views/promotions'
import Subscribe from '@/views/Subscribe'

export default function Home() {
  return (
    <main>
      <Hero/>
      {/*promotion section */}
      <p className='text-center text-sm text-blue-600 font-bold pt-28'>PROMOTIONS</p>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center pt-3">
      Our Promotions Events
      </h1>
      <Promotions/>
      {/*product*/}
      <Productlist/>
      <Subscribe/>
    </main>
  )
}
