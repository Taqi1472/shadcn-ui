import React from 'react'
import { ShoppingBag } from 'lucide-react';
import { Products } from '@/utils/mock';
import { StaticImageData } from "next/image"
import  Image  from 'next/image';

const getproductsdetails = (id:string | number) => {
  return Products.filter((product)=> product.id == id)
}

function Cart({ params }: { params: { id: string } }) {
  const result = getproductsdetails(params.id);
  return (
    <div>
        <h1 className='font-bold text-2xl m-20'>
        Shopping Cart
        </h1>
        <div>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <ShoppingBag height={150} width={150} />
        <p className='font-bold text-4xl mt-4'>
        Your shopping bag is empty
        </p>
        </div>
    </div>
  )
}

export default Cart