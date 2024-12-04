import { useState } from "react";
import { Input } from "../../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Label } from "@/components/ui/label";
// import { DotFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { DotFilledIcon } from "@radix-ui/react-icons";

const TopUp = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");
const handleSubmit=()=>{
    console.log(amount,paymentMethod)
}
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          className="py-7 text-lg"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </div>

      <div>
        <h1>Select Payment Method</h1>
        <RadioGroup
          className="flex"
          defaultValue="RAZORPAY"
          onValueChange={(value) => setPaymentMethod(value)}
          value={paymentMethod}
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md text-white">
            <RadioGroupItem value="RAZORPAY" id="RAZORPAY" className="h-9 w-9" icon={DotFilledIcon} />
            <Label htmlFor="RAZORPAY" className="text-lg">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzHTRfO-BS6NfMWXr8zbb3d-pcOCPNgJX9A&s"
                  alt="Razorpay"
                />
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem  value="STRIPE" id="STRIPE" className="h-9 w-9" icon={DotFilledIcon} />
            <Label htmlFor="STRIPE" className="text-lg">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdvDnQ5mPp_uXg14LW9MigSEC2ZjIIIemKA&s"
                  alt="Stripe"
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    
        <Button onClick={handleSubmit} className="bg-blue-500 text-white w-full py-3 px-5 rounded-md items-center">
     Submit
        </Button>
    
    </div>
  );
};

export default TopUp;
