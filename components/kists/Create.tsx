import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChartBarIcon, MessageSquare } from 'lucide-react'
import Products from './Products'
const ChatList = () => {
  return (
   <Sheet>
  <SheetTrigger className='button duration-200 hover:bg-amber-300/20  text-black w-11  rounded-2xl flex justify-center items-center '>
    <MessageSquare/>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Products history</SheetTitle>
       <Products/>
      
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default ChatList
