'use client'
import Card from '@/components/kists/card'
import { fetchdata } from '@/helper'
import { Cardtype } from '@/types'
import React, { useState } from 'react'

export const dynamicParams = true // true | false,

const page =  () => {
  const [Products  ,setProducts ] =useState<Cardtype>()
  const getdata=async ()=>{
    const data = await fetchdata({prompt:'you have acces to find'})
    console.log(data)
    setProducts(data)
  }
  return (
    <div className='flex Whitespace justify-center items-center h-max'>
      <button onClick={getdata}>get</button>
      <div className="flex justify-center w-full  rounded-2xl p-2.5 sm:w-[90%] gap-1.5 h-full ">
        <Card 
        description={Products?.description}
        pricing={Products?.pricing}
        product_name={Products?.product_name}
         target_audience={Products?.target_audience}
        estimated_profit_margin={Products?.estimated_profit_margin}
        resale_platforms={Products?.resale_platforms}
        source_platform={Products?.source_platform}
        trending_reason={Products?.trending_reason}
        product_image={Products?.product_image}
        />
       
      </div>

    </div>
  )
}

export default page
