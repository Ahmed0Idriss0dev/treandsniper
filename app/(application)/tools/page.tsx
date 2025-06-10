'use client'
import Animation from '@/components/kists/Animation'
import TextINput from '@/components/kists/TextINput'
import Welcome from '@/components/kists/Welcome'
import { Trending } from '@/store'

import React from 'react'

const page =  () => {
  const {isComplet } = Trending()
  return (
    <div className='flex justify-center flex-col gap-2.5 h-dvh items-center'>
      {isComplet ?  <Animation/> : <Welcome/>}


      <TextINput />
    </div>


  )
}

export default page
