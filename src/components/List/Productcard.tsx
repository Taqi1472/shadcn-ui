import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

function Productcard(props: {
  title:string, 
  price:number, 
  img:StaticImageData, 
  category:string,
  id:number
}) {
  return (
    <Link href={`/products/${props.id}`}>
        <div>
    <Image src={props.img} alt='image1'/>
    <h3 className='font-bold text-lg mt-4'>{props.title}</h3>
    <p className='font-bold text-lg '>${props.price}</p>
    <p className='font-bold'>Category:<span className='text-base font-normal'>{props.category}</span></p>

    
  </div>
    </Link>

  )
}

export default Productcard