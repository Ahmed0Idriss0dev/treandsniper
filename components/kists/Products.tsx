'use client'
import { Trending } from '@/store'
import Link from 'next/link'
import React from 'react'

const Products = () => {
  const {data} = Trending()
  return (
    <div className='flex flex-col gap-1' >
        {data.map(({id ,ProductData})=>(
           <Link key={id} href={`/tools/${id}`}>
            <h1 className='empty:hidden'>{ProductData?.product_name}</h1>
           </Link>

        ))}
    </div>
  )
}

export default Products
