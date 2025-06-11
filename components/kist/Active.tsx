'use client'
import { useState } from 'react';

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Star } from 'lucide-react'
import Steps from './Steps'
import { Subscribe } from '@/helper';
import Error from './Alert';
const Active = () => {
  const [alert, setalert] = useState<Boolean>()
  const [Key, setKey] = useState<string>()
  async function confirme() {
    if(!Key?.trim()) setalert(true)
    const data = await Subscribe(Key)
  }
  return (
   <Dialog>
  <DialogTrigger className='flex justify-center  items-center gap-1 bg-linear-300 from-white text-black border border-neutral-100 to-treand-700/15 button w-11 sm:w-30 h-11 bg-treand-100'>
    <Star />
    <span className='hidden sm:block'>Upgread</span>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
        {alert && <Error/>}
      <DialogTitle>Upgread Your account </DialogTitle>
      <div className="flex items-center gap-1.5">
      <input onInput={e=>setKey(e.currentTarget.value)} type="text" placeholder='Your licenes key' className='w-full h-11 rounded-md border border-neutral-200 px-1.5 outline-0' />

      </div>
      <a className='text-blue-700 underline text-sm' href="https://mrprobuild.gumroad.com/l/TrendSniper" target="_blank" rel="noopener noreferrer">
      get licences kay 6$
      </a>
      <Steps/>
        <button onClick={confirme} className='button w-full rounded-2xl bg-treand-700 text-white '>Active Subscription</button>

    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default Active
