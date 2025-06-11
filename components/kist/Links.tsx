import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <div className=" hidden sm:flex items-center gap-1">
              <Link  className='button border border-neutral-300 text-black w-36 rounded-2xl flex justify-center items-center ' href="/sign-in">Login</Link>
              <Link  className='button bg-treand-500 text-white  w-24 sm:w-36 rounded-full flex justify-center items-center ' href="/sign-up">Join us</Link>
          </div>
  )
}

export default Links
