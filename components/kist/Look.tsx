import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BrainCog } from 'lucide-react'
const Look = () => {
  return (
    <Dialog>
  
  <DialogTrigger className='button flex justify-center gap-1 items-center bg-treand-400/20 text-blue-800 border w-max p-2.5 '>
          <BrainCog/>
          <span className='text-sm'>Look</span>
          </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upgread Your account </DialogTitle>
     
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default Look
