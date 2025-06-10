import { Cardtype } from '@/types'
import { Circle, CreativeCommonsIcon, DollarSign, Gem, Sprout, Target, TrendingUp, User } from 'lucide-react'
import React from 'react'

const Card = ({ description, estimated_profit_margin, pricing, product_image, product_name, resale_platforms, source_platform, target_audience, trending_reason, unique_selling_points }: Cardtype) => {

  return (
    <div className='w-[60%] flex flex-col gap-2  rounded-2xl p-2 border-neutral-200 bg-white  h-full'>
      <h1 className='font-semibold'>{product_name} </h1>
      <p className='text-sm opacity-80'>{description} </p>
      <div className="grid grid-cols-2 gap-2 ">

        <div className="flex justify-center items-center h-30 rounded-2xl flex-col gap-1 border border-treand-950 bg-treand-400/15">
          <DollarSign />
          <p>buy price</p>
          <p className='flex items-center gap-1'>{pricing?.buy_price}$ </p>
        </div>
        <div className="flex justify-center items-center h-30 rounded-2xl flex-col gap-0.5 border border-treand-950 bg-treand-400/15">
          <Gem />
          <p>resale price</p>
          <p>{pricing?.suggested_resale_price}$ </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-30 rounded-2xl flex-col gap-1 border border-treand-400">
        <Sprout />
        <p>Profit margin </p>
        <p className=' rounded-full'>{estimated_profit_margin} </p>
      </div>
      <div className="flex rounded-2xl w-full border border-neutral-200 p-3 flex-col ">
        <div className="flex items-center gap-1.5">
        <Target/>
        <b>target audience</b>
        </div>
        {target_audience?.map((e, i) => (
          <p className='flex items-center gap-2' key={i}> {e} </p>
        ))}
      </div>
      <b>trending_reason</b>
      <div className="grid gap-1.5 grid-cols-2">

        <div className="flex justify-center items-center h-30 rounded-2xl flex-col gap-1 border border-treand-950 bg-treand-400/15">
          <TrendingUp />
          <b>market demand</b>
          <p>{trending_reason?.market_demand}%</p>
        </div>
        <div className="flex justify-center items-center h-30 rounded-2xl flex-col gap-0.5 bg-treand-400/15">
          <TrendingUp />
          <b>social signals</b>
          <p>{trending_reason?.social_signals}%</p>
        </div>
      </div>

      <b>resale platforms</b>
      <div className="">
        {resale_platforms}
      </div>
      <b>source platform</b>
      <div className="grid grid-cols-3 gap-2 ">
        {source_platform}

      </div>

    </div>
  )
}

export default Card
