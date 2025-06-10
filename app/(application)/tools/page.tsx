import Niches from '@/components/kists/Neiche'
import Providers from '@/components/kists/Providers'
import { currentUser } from '@clerk/nextjs/server'
import { Send } from 'lucide-react'
import React from 'react'

const page = async() => {
  const user = await currentUser()
  return (
    <div className='flex justify-center flex-col gap-2.5 h-dvh items-center'>
       <div className="text-center">
          <h1 className='text-4xl'> Hello {user?.fullName} </h1>
          <p className='text-sm opacity-80'>What's Next? Product, Niche, & Opportunity Call</p>
        </div>

      <div className="border border-treand-950/30 p-2.5 rounded-2xl h-36 w-1/2">
      <textarea name="" placeholder='Whats Next? ' className='w-full h-[67%] resize-none outline-0 p-2.5' id=""></textarea>
      <div className="w-full gap-1 flex justify-end items-center">
      <button className='button duration-200 hover:bg-amber-300/20  text-black w-11  rounded-2xl flex justify-center items-center ' >
        <Send/>
      </button>
      </div>
      </div>
      
    </div>
  )
}

export default page
