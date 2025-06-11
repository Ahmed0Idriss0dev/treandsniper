'use client'
import React, { useState } from 'react'

const Priceplan = () => {
 const [open , setOpen] =useState<Boolean>()
 function mLeave(){
    setOpen(false)
 }
 function MMove(){
   setOpen(true)
 }
  return (
    <div className="relative duration-200 hover:rotate-1  hover:scale-[1.1] flex justify-center items-center w-96 h-96 p-3  group cursor-pointer">
            <div className={`w-80 duration-200  h-60 group-hover:-top-12  text-center flex justify-center    top-0 border-4 border-white -z-0 absolute bg-white rounded-t-2xl `}>
                <h1 className='top-3'>👋Get Your licenes key 👋</h1>
            </div>
    <div onMouseMove={MMove} onMouseLeave={mLeave} id='pricecard' className="w-80 bg-white text-black to-neutral-950/0 border-2 group-hover:border-4 border-white  absolute top-0 z-20 p-2 flex-col   flex justify-between items-center h-96 rounded-2xl">
            <div className="flex justify-center flex-col items-center w-full h-52">
                           <h1 className='text-3xl'>6$/Month</h1>
                <p>ultimaite access</p>

            </div>
            <a className='w-full ' href="https://mrprobuild.gumroad.com/l/TrendSniper" target="_blank" rel="noopener noreferrer">
            
            <button className='w-full text-white cursor-pointer h-12 bg-black rounded-2xl'>Grow now</button>
            </a>
        </div>
    </div>
  )
}

export default Priceplan
