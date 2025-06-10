import React from 'react'
import Logo from '../kists/Logo'
import { UserButton } from '@clerk/nextjs'
import Create from '../kists/Create'
import ChatList from '../kists/Create'
import Active from '../kists/Active'

const ToolNav = () => {
  return (
    <nav className='flex justify-between h-12 items-center gap-1 px-4 sm:px-8'>
       <Logo/>  
      <div className="flex items-center gap-1">
        <Active/>
        <ChatList/>
        <UserButton />
        </div>    

    </nav>
  )
}

export default ToolNav
