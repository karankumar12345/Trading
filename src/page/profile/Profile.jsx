import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import AccountVeri from './AccountVeri'

const Profile = () => {
  const handleEnableTwoStepVer=()=>{
    
  }
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>

          </CardHeader>
       
          <div className='lg:flex gap-32'>
            <div className='space-y-7'>
              <div className='flex'>
                <p className='w-[9rem]'>Email:</p>
                <p>failure@gamil.com</p>
                
              </div>
          
              <div className='flex'>
                <p className='w-[9rem]'>Full Name:</p>
                <p>Karan Kumar</p>
                
              </div>
              <div className='flex'>
                <p className='w-[9rem]'>Date Of Birth:</p>
                <p>26 Aug 2005</p>
                
              </div>
              <div className='flex'>
                <p className='w-[9rem]'>Nationality:</p>
                <p>Indian</p>

                
              </div>

            </div>

          </div>
          </Card> 
          <div className='mt-6'>
            <Card className="w-full">
              <CardHeader className="pb-7">
             
            
              <div className='flex items-center gap-3'>
              <CardTitle>2 step Verification</CardTitle>
         {true?(
                <Badge className="bg-green-600 space-x-2 text-white ">
                <VerifiedIcon/>
                <span>Enabled</span>
               </Badge>
         ):    <Badge className="bg-orange-500">
         Disabled
        </Badge>
         }

           
              </div>
              </CardHeader>
              <CardContent>
                <div >
<Dialog>
<DialogTrigger>
<Button>Enabled Two Step Verification</Button>
  
</DialogTrigger>
<DialogContent>
  <DialogHeader>
    <DialogTitle>Two Step Verification</DialogTitle>

    <AccountVeri handleSubmit={handleEnableTwoStepVer}/>
  </DialogHeader>
</DialogContent>
</Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
      
    </div>
  )
}

export default Profile
