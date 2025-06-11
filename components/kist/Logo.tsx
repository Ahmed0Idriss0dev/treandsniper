import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
       <Link href='/'>
       <Image className='w-40 sm:w-50' src='/logos/logo.svg' width={200} height={200} alt='logo' />
       </Link>
    
  )
}

export default Logo
