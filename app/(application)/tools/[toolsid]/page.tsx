'use client'
import Card from '@/components/kist/card'
import { fetchdata } from '@/helper'
import { Trending } from '@/store'
import { Cardtype } from '@/types'
import React, { useState } from 'react'

export const dynamicParams = true
import { useParams } from 'next/navigation'
const page = () => {
  const { toolsid } = useParams<{ toolsid: string }>()
  const { data } = Trending()
  const findfirst = data.find(({ id }) => id === toolsid);
  const Products = findfirst?.ProductData as Cardtype


  return (
    <div className='flex Whitespace justify-center items-center h-max'>
      <div className="flex justify-center   rounded-2xl p-2.5 w-full sm:w-[90%] gap-1.5 h-full ">
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
