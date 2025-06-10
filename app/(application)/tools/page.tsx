import Niches from '@/components/kists/Neiche'
import Providers from '@/components/kists/Providers'
import TextINput from '@/components/kists/TextINput'
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
        
      <TextINput/>
      </div>
      
  
  )
}

export default page
