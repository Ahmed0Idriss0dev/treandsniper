import { data } from '@/constant'
import Image from 'next/image'
import React from 'react'

const Providers = () => {
  return (
    <div className='flex h-16 not-hover:opacity-90 justify-center items-center'>
      {data.map(({image}, i)=>(
             <Image  className='hover:w-14 duration-100 cursor-pointer w-10 h-10 hover:h-14' key={i} src={image} width={200} height={200} alt='logo' />

      ))}
    </div>
  ) 
}

export default Providers
