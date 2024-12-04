import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const AccountVeri = ({ handleSubmit }) => {
  // State to manage OTP input value
  const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);

  // Handle OTP input changes
  const handleOtpChange = (e, index) => {
    const newOtpValue = [...otpValue];
    newOtpValue[index] = e.target.value;  // Update the value of the specific slot
    setOtpValue(newOtpValue);  // Set the new state
  };

  return (
    <div className="flex justify-center ">
      <div className="space-y-5 mt-10 w-full">
        <div className="flex justify-between items-center">
          <p>Email:</p>
          <p>Karan12@gmail.com</p>

          <Dialog>
            <DialogTrigger>
              <Button>Verify</Button>
            </DialogTrigger>
            <DialogContent aria-describedby="otp-description">
              <DialogHeader>
                <DialogTitle>Enter OTP</DialogTitle>
                <p id="otp-description" className="sr-only">
                  Please enter the OTP sent to your email address to verify your account.
                </p>

                <div className="py-5 flex gap-10 justify-center items-center"></div>

                <InputOTP
                  maxLength={6}
                  value={otpValue.join("")} // Join OTP values to form a string for submission
                >
                  <InputOTPGroup>
                    {[0, 1, 2].map((index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        value={otpValue[index]}
                        onChange={(e) => handleOtpChange(e, index)} // Correctly handle change for specific slot
                      />
                    ))}
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    {[3, 4, 5].map((index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        value={otpValue[index]}
                        onChange={(e) => handleOtpChange(e, index)} // Correctly handle change for specific slot
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>

                <DialogClose>
                  <Button onClick={() => handleSubmit(otpValue.join(""))}>Submit</Button>
                </DialogClose>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AccountVeri;
