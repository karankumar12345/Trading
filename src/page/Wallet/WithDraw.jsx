import { useState } from 'react'
import { Input } from '@/components/ui/input'

import { BanknoteIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'

const WithDraw = () => {
    const [amount,setAmount]=useState()
    const handleSubmit=()=>{
        console.log(amount)
    }
  return (
    <div className='pt-10 space-y-5 '>
        <div className='flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4'>
            <p>Available Balance</p>
            <p>₹ 0.00</p>
        </div>
        <div className='flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4'>
           <h1>Enter Withdrawal Amount</h1>
           <div className='flex items-center justify-center'>
            <Input onChange={(e)=>setAmount(e.target.value)} className='w-40' type='number' placeholder='₹ 0.00' />


           </div>
        </div>
        <div>
            <p className='pb-2'>Transfer To</p>
            <div className='flex items-center justify-between bg-slate-900 px-5 py-3 rounded-md'>
                <div className='flex items-center space-x-2'>
                 <BanknoteIcon/>
                </div>
            <div>
                <p className='text-xl font-bold'>Yes Bank</p>
                <p className='text-x5'>**********4566</p>
            </div>

            </div>
        </div>
   <DialogClose className='w-full'>
   <Button onClick={handleSubmit} className="w-full py-7 text-xl bg-blue-700">
            Withdraw
        </Button>
   </DialogClose>
      
    </div>
  )
}

export default WithDraw
