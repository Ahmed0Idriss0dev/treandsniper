import React from 'react'
import Logo from '../kists/Logo'
import { UserButton } from '@clerk/nextjs'
import Create from '../kists/Create'

const ToolNav = () => {
  return (
    <nav className='flex justify-between h-12 items-center gap-1 px-4 sm:px-8'>
       <Logo/>  
      <div className="flex items-center gap-1">
        <UserButton />
        </div>    

    </nav>
  )
}

export default ToolNav
