'use client'
import { useState } from 'react';

import { Search, Send } from 'lucide-react'
import React from 'react'
import { fetchdata, generateId } from '@/helper';
import { Trending } from '@/store';
import { redirect } from 'next/navigation';
import { ProductsData } from '@/types';

const TextINput = () => {
    const [text, settext] = useState<string >()
    const {setdate  } =Trending()
    
    const getdata=async ()=>{
        const data = await fetchdata({prompt:text})
        const id = generateId()
        const product:ProductsData={ id , ProductData:data}  
        setdate(product)
        redirect(`/tools/${id}`)
      }
  return (
  <div className="border border-treand-950/30 p-2.5 rounded-2xl h-36 w-1/2">
    
        <textarea onChange={e=> settext(e.target.value)} name="" placeholder='Whats Next? ' className='w-full h-[67%] resize-none outline-0 p-2.5' id=""></textarea>
        <div className="w-full gap-1 flex justify-end items-center">
          <button className='button flex justify-center gap-1 items-center bg-treand-400/40 border w-max p-2.5 '>
          <Search/>
          <span className='text-sm'>Auto Research</span>
          </button>
        <button onClick={getdata} className='button duration-200 hover:bg-amber-300/45  text-black w-11  rounded-2xl flex justify-center items-center ' >
          <Send/>
        </button>
   </div>
   </div>

  )
}

export default TextINput
