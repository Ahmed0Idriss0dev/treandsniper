import { useState } from 'react';

'use client'
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
const Active = () => {
  const [Key, setKey] = useState<string>()
  async function confirme() {
    const data = await Subscribe(Key)
  }
  return (
   <Dialog>
  <DialogTrigger className='flex justify-center items-center gap-1 bg-linear-300 from-white text-black border border-neutral-100 to-treand-700/15 button w-30 h-11 bg-treand-100'>
    <Star />
    <span>Upgread</span>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upgread Your account </DialogTitle>
      <input type="text" placeholder='Your licenes key' className='w-full h-11 rounded-md border border-neutral-200 px-1.5 outline-0' />
      <button className='button '>Active</button>
      <a className='text-blue-700 underline text-sm' href="https://ahmedidev.gumroad.com/l/TrendingSnipe?_gl=1*12w1s11*_ga*MTYzMDQxMzQ5LjE3NDk1NjM4NjM.*_ga_6LJN6D94N6*czE3NDk1Njc4MTQkbzIkZzEkdDE3NDk1Njc4MTckajU3JGwwJGgw" target="_blank" rel="noopener noreferrer">
      get licences kay 6$
      </a>
      <Steps/>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default Active
