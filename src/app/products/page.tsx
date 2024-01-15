import React from 'react'
import Link from 'next/link'
import { Products } from '@/utils/mock'
import Productcard from '@/components/List/Productcard'
import { StaticImageData } from 'next/image'

function Allproducts() {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly mt-16 flex-wrap py-10'>
      {
        Products.map((product)=>(
          <Productcard 
          key={product.id} 
          title={product.name} 
          price={product.price} 
          img={product.image as StaticImageData} 
          category={product.category}
          id={product.id}
          />
        ))
      }
    </div>
  )
}


export default Allproducts