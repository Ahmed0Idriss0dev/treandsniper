import Niches from '@/components/kists/Neiche'
import Providers from '@/components/kists/Providers'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center flex-col gap-2.5 h-dvh items-center'>
       <div className="text-center">
          <h1 className='text-4xl'>Snipe Trending Digital Products <br /> Before They Go Mainstream</h1>
          <p className='text-sm opacity-80'>rendSniper uses real-time AI to hunt down high-demand digital products across Etsy, Gumroad, Shopify, <br /> and more — so you can flip them fast and profit first.</p>
        </div>

      <div className="border border-treand-950 p-2.5 rounded-2xl h-40 w-1/2">
      <textarea name="" className='w-full h-[67%] resize-none outline-0 p-2.5' id=""></textarea>
      <div className="w-full gap-1 flex justify-end items-center">
      <button className='button bg-treand-500 text-black w-36 rounded-2xl flex justify-center items-center ' >send</button>
      </div>
      </div>
      
    </div>
  )
}

export default page
