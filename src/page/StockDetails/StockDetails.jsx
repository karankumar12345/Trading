import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { BookmarkFilledIcon, BookmarkIcon, DotIcon } from '@radix-ui/react-icons'
import React from 'react'
import ThreadingForm from './ThreadingForm'
import StockChart from '../Home/StockChart'


const StockDetails = () => {
  return (
    <div className='p-5 mt-5 '>
      <div className='flex justify-between'>

<div className='flex gap-5 items-center'>
  <div>
    <Avatar>
    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70sz8P9MMtMpsRqJZ4Ei9LLwKiqbe73eLhw&s" />
    </Avatar>
  </div>
  <div>
    <div className='flex items-center gap-2'>
      <p>BTC</p>
      <DotIcon className='text-gray-400'/>
      <p className='text-gray-400'>BitCoin</p>

    </div>
    <div className='flex items-end gap-2'>
      <p className='text-xl font-bold'>$4747</p>
      <p className='text-red '>
        <span>-109292.32</span>
        <span>(-0.222)</span>
      </p>
    </div>
  </div>

</div>
<div className='flex items-center gap-3'>
  <Button>
    {true?(
  <BookmarkFilledIcon className='h-6 w-6' />
    ): <BookmarkIcon className='h-6 w-6' />}
  
   

  </Button>
  <Dialog>
    <DialogTrigger>
      <Button size="lg">Tread</Button>

    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
   
      </DialogHeader>
      <ThreadingForm/>
    </DialogContent>

  </Dialog>
</div>
      </div>

      <div className='mt-14'>
        <StockChart/>
      </div>
    </div>
  )
}

export default StockDetails
