import React from 'react'
import Providers from '../kists/Providers'
import Link from 'next/link'

const Hello = () => {
  return (
    <main className='flex justify-center flex-col items-center -z-0  min-h-[60dvh] w-full px-6 sm:px-11 md:px-14'>
      <div className="flex justify-center flex-col items-center gap-4">
        <div className="text-center">
          <h1 className='text-2xl text-transparent bg-clip-text bg-linear-90 from-treand-700 to-red-500 sm:text-4xl'>Snipe Trending Digital Products <br /> Before They Go Mainstream</h1>
          <p className='text-sm opacity-80'>rendSniper uses real-time AI to hunt down high-demand digital products across Etsy, Gumroad, Shopify, <br /> and more — so you can flip them fast and profit first.</p>
        </div>

      <Link className='button bg-black text-white w-full  sm:w-46 rounded-2xl flex justify-center items-center ' href="/tools">Get started</Link>
        <Providers/>
      </div>
    </main>
  )
}

export default Hello
 