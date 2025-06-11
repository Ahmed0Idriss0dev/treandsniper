import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
       <Link href='/'>
       <Image src='/logos/logo.svg' width={200} height={200} alt='logo' />
       </Link>
    
  )
}

export default Logo
