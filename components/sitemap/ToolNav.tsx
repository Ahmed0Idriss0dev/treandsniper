import React from 'react'
import Logo from '../kist/Logo'
import { UserButton } from '@clerk/nextjs'
import Create from '../kist/Create'
import ChatList from '../kist/Create'
import Active from '../kist/Active'

const ToolNav = () => {
  return (
    <nav className='flex border border-neutral-200 py-2 justify-between  items-center gap-1 px-4 sm:px-8'>
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
