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
    <div className="relative duration-200 hover:scale-[1.1] w-96 h-96 p-3  group cursor-pointer">
            <div className={`w-80 duration-200 h-55 group-hover:-top-12  text-center flex justify-center top-0 border-2 border-white -z-0 text-black absolute bg-white rounded-t-2xl `}>
                <h1>Get </h1>
            </div>
    <div onMouseMove={MMove} onMouseLeave={mLeave} id='pricecard' className="w-80 border-2 border-white text-white absolute top-0 z-20 p-2 flex-col   flex justify-between items-center h-96 rounded-2xl bg-black ">
             <h1 className='text-2xl'>5$/Month</h1>
            <div className=""></div>
            <a className='w-full ' href="https://ahmedidev.gumroad.com/l/TrendingSnipe?_gl=1*12w1s11*_ga*MTYzMDQxMzQ5LjE3NDk1NjM4NjM.*_ga_6LJN6D94N6*czE3NDk1Njc4MTQkbzIkZzEkdDE3NDk1Njc4MTckajU3JGwwJGgw" target="_blank" rel="noopener noreferrer">
            
            <button className='w-full text-black cursor-pointer h-12 bg-white rounded-2xl'>Grow now</button>
            </a>
        </div>
    </div>
  )
}

export default Priceplan
