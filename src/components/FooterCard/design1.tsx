import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import logo from '@/components/logo.webp'
import Link from 'next/link';
import { Twitter } from 'lucide-react';

function Design1() {
  return (
    <div className='flex p-40 justify-between '>
        <div>
            <Image src={logo} alt='photo' height={30}/>
            <p className='mt-8 text-gray-500'>Small, artisan label that offers a thoughtfully<br/> curated collection of high quality everyday<br/> essentials made.
            </p>
            <div className='flex gap-4 mt-8'>
            <Link href={'#'} className='bg-gray-100 h-10 w-10 rounded-md flex justify-center items-center'>
              <Twitter className='fill-black'/>
            </Link>
            <Link href={'#'} className='bg-gray-100 h-10 w-10 rounded-md flex justify-center items-center'>
            <p className='font-bold text-xl'>f</p>
            </Link>
            <Link href={'#'} className='bg-gray-100 h-10 w-10 rounded-md flex justify-center items-center font-bold text-xl'>
              in
            </Link>
            </div>
        </div>
        <div className='text-gray-500'>
          <h2 className='font-bold text-xl'>
            Company
          </h2>
          <div className='flex flex-col gap-2 mt-4'>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Terms of Use</Link>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>How it Works</Link>
          <Link href={'#'}>Contact Us</Link>
          </div>
        </div>
          <div className='text-gray-500'>
            <h2 className='font-bold text-xl'>
            Support
            </h2>
            <div className='flex flex-col gap-2 mt-4'>
              <Link href={'#'}>Support Carrer</Link>
              <Link href={'#'}>24h Service</Link>
              <Link href={'#'}>Quick Chat</Link>
            </div>
          </div>
        <div className='text-gray-500'>
            <h2 className='font-bold text-xl'>
            Contact
            </h2>
            <div className='flex flex-col gap-2 mt-4'>
              <Link href={'#'}>Whatsapp</Link>
              <Link href={'#'}>Support 24h</Link>
            </div>
        </div>
        </div>
  )
}

export default Design1