import { data, niches } from '@/constant'
import Image from 'next/image'
import React from 'react'

const Niches = () => {
  return (
    <div className='grid grid-cols-10 gap-1'>
      {niches.map((e, i)=>(
           <div key={i} className="flex justify-center items-center bg-amber-300 rounded-full">
             <span>{e} </span>
           </div>
      ))}
    </div>
  )
}

export default Niches
