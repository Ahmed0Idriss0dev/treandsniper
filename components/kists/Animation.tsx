import React from 'react'
import Providers from './Providers'
import Image from 'next/image'

const Animation = () => {
  return (
    <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
            <Image src='/logos/icons.svg' width={40} height={40} alt='logo' />
          <p className='animate-pulse'>Hold on a moment, I'm analyzing...</p>
        </div>
    <div className='w-96 h-30 p-3.5 border border-neutral-300 rounded-2xl'>
      <div className="animate-pulse">
        <Providers/>
      </div>
    </div>
    </div>
  )
}

export default Animation
