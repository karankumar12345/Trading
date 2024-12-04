import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Payment from "./Payment"

const PaymentDetails = () => {
  return (
    <div className="px-20 ">
      <h1 className="text-3xl font-bold py-10">PAymet Details</h1>
{false?(
          <Card>
          <CardHeader>
              <CardTitle>Yes Bank</CardTitle>
              <CardDescription>
                  A/C No:
                  *********1338
              </CardDescription>
  
          </CardHeader>
          <CardContent>
              <div className="flex justify-between">
                  <p>Account Holder</p>
                  <p>:Failure </p>
              </div>
              <div className="flex justify-between">
                  <p className="w-32"> IFSC</p>
                  <p className="text-gray-400">:4848484884848</p>
              </div>
              <div className="flex justify-between">
                  <p>Transaction Date</p>
                  <p>:12/12/2021</p>
              </div>
          </CardContent>
  
        </Card>
):
<Dialog>
<DialogTrigger>
<Button className="py-6">Add Payment details</Button>

</DialogTrigger>

<DialogContent>
<DialogHeader>
    <DialogTitle>
        Payment Details
    </DialogTitle>

</DialogHeader>
<DialogHeader>
    <Payment/>
</DialogHeader>
</DialogContent>
</Dialog>
}
 
    </div>
  )
}

export default PaymentDetails
