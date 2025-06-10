import { UserButton, UserProfile } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../kists/Logo'
import Links from '../kists/Links'

const Navigation = async () => {
const {userId}  = await auth()
  return (
    <nav className='flex py-3 justify-between  items-center gap-1 whitespace'>
     <Logo/>      
     
     {userId&& <Link className='button bg-treand-500 text-black w-36 rounded-2xl flex justify-center items-center ' href="/tools">Dasbourd</Link>}
     {!userId&& <Links/>}

    </nav>
  )
}

export default Navigation
