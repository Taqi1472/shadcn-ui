import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Productcard from '@/components/List/Productcard'
import image1 from '@/components/image1.png'
import image2 from '@/components/image2.png'
import image3 from '@/components/image3.png'
import image4 from '@/components/image4.png'
import image5 from '@/components/image5.png'
import image6 from '@/components/image6.png'
import image7 from '@/components/image7.png'
import image8 from '@/components/image8.png'
import image9 from '@/components/image9.png'
import { Products } from '@/utils/mock'

function Productlist() {
  const productchunks =  Products.slice(0,10)
  return (
    <div className='flex mt-36 gap-2  '>
      {
        productchunks.map((product)=>(
          <Productcard 
          key={product.id} 
          title={product.name} 
          price={product.price} 
          img={product.image as StaticImageData} 
          category={product.category} 
          id={product.id}/>
        ))
      }
    {/* <Productcard title='abc' price={104} img={image1}/>
    <Productcard title='xyz' price={100} img={image2}/>
    <Productcard title='mno' price={103} img={image3}/>
    <Productcard title='abc' price={104} img={image4}/>
    <Productcard title='xyz' price={100} img={image5}/>
    <Productcard title='mno' price={103} img={image6}/>
    <Productcard title='abc' price={104} img={image7}/>
    <Productcard title='xyz' price={100} img={image8}/>
    <Productcard title='mno' price={103} img={image9}/> */}
    </div>
  )
}

export default Productlist