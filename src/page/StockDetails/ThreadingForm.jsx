import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DotIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ThreadingForm = () => {
    const [orderType,setOrderType]=useState("SELECT")
  return (
    <div className='space-y-10 p-5'>
        <div>
            <div className='flex gap-4 items-center justify-between'>
                <Input className="py-7 focus:outline-none"
                placeholder="Enter Amount"
                type="number"
                name="amount"
                />
                <div>
                    <p className='border text-2xl flex justify-center items-center '> 4563</p>

                </div>

            </div>

          {false&&  <h1>Insufficent Wallet Balance To Buy</h1>}
        </div>
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
      

      <div className='flex items-center justify-between'>
       <p>{orderType==='BUY'?"Available Case":"Available Quantity"}</p>
<p>{orderType=="BUY"?9000:"Available Quantity"}</p>
      </div>
      <div>
        <Button className={`w-full py-6 ${orderType==="SELL"?"bg-red-700 text-white":"bg-blue-600"}`}>
            {orderType=="BUY"?"Available Case":"Available Quantity"}

        </Button>
        <Button className="w-full py-6" onClick={()=>setOrderType(orderType=="BUY"?"SELL":"BUY")}>
            {orderType=="BUY"?"or sell":"or Buy"}
        </Button>
        </div></div>
    
  )
}

export default ThreadingForm
