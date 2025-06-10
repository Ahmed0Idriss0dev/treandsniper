import { BadgeCheck, Copy, CopyCheck, MousePointerClick, Subscript } from 'lucide-react'
import React from 'react'

const Steps = () => {
  return (
    <div className="flex border border-neutral-200 p-2 bg-treand-600/10 rounded-2xl flex-col gap-2">

    <div className='flex items-center gap-1'>
        <div className="flex justify-center bg-white items-center h-11 w-11 rounded-full border border-neutral-100">
        <MousePointerClick className='text-treand-600 '/>
        </div>
      <span>click on get licences key </span>
    </div>
     <div className='flex items-center gap-1'>
  <div className="flex justify-center bg-white items-center h-11 w-11 rounded-full border border-neutral-100">
        <BadgeCheck className='text-treand-600 '/>
        </div>      <span>subscribe  </span>
    </div>
     <div className='flex items-center gap-1'>
  <div className="flex justify-center bg-white items-center h-11 w-11 rounded-full border border-neutral-100">
        <CopyCheck className='text-treand-600 '/>
        </div>      <span>Copy key</span>
    </div>
    </div>
  )
}

export default Steps
