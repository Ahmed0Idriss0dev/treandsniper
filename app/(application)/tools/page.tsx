'use client'
import Animation from '@/components/kist/Animation'
import TextINput from '@/components/kist/TextINput'
import Welcome from '@/components/kist/Welcome'
import { Trending } from '@/store'

import React from 'react'

const page =  () => {
  const {isStarted } = Trending()
  return (
    <div className='flex justify-center flex-col gap-2.5 h-dvh items-center'>
      {isStarted ?  <Animation/> : <Welcome/>}


      <TextINput />
    </div>


  )
}

export default page
