import Animation from '@/components/kists/Animation'
import Niches from '@/components/kists/Neiche'
import Products from '@/components/kists/Products'
import Providers from '@/components/kists/Providers'
import TextINput from '@/components/kists/TextINput'
import Welcome from '@/components/kists/Welcome'
import { currentUser } from '@clerk/nextjs/server'
import { Send } from 'lucide-react'
import React from 'react'

const page = async () => {
  return (
    <div className='flex justify-center flex-col gap-2.5 h-dvh items-center'>
      <Animation/>

      <TextINput />
    </div>


  )
}

export default page
