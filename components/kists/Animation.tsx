import React from 'react'
import Providers from './Providers'
import Image from 'next/image'

const Animation = () => {
  return (
    <div className="flex w-1/2 flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <div className="relative w-12 h-12">
                    <div className="w-11 h-11 rounded-full border-l border-treand-700  absolute animate-spin"/>

                <Image className='absolute top-1 left-1 h-9 w-9' src='/logos/icons.svg' width={40} height={40} alt='logo' />

          </div>
          <p className='animate-pulse'>Hold on a moment, I'm analyzing...</p>
        </div>
    <div className='w-96 bg-treand-50 flex gap-2 items-center h-30 p-3.5 border border-neutral-300 rounded-2xl'>
     <div className="w-40 h-full bg-neutral-200 rounded-2xl"/>
      <div className="animate-pulse scale-50">
        <div className="w-30 h-full "></div>
        <Providers/>
      </div>
    </div>
    </div>
  )
}

export default Animation
