import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent
} from "@/components/ui/dialog";
// import { DialogContent } from "@radix-ui/react-dialog";
import { CopyIcon, ReloadIcon, ShuffleIcon, UpdateIcon } from "@radix-ui/react-icons";
import { DollarSign, UploadIcon, Wallet2Icon, ArrowDownCircleIcon } from "lucide-react";  // Using a different icon for Withdraw
import TopUp from "./TopUp";
import WithDraw from "./WithDraw";
import Transfer from "./Transfer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <Wallet2Icon size={20} />
                <div>
                  <CardTitle className="text-2xl">My Wallet </CardTitle>
                  <div className="flex items-center gap-2">
                    <p>#A475Ed</p>
                    <CopyIcon
                      size={10}
                      className="cursor-pointer hover:text-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div>
                <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign />
              <span className="text-2xl font-semibold">233232</span>
            </div>
            <div className="flex gap-7 mt-5">
              {/* Top Up Dialog */}
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <UploadIcon />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top Up Your Wallet</DialogTitle>
                  </DialogHeader>
                  <TopUp/>
                </DialogContent>
              </Dialog>

              {/* Withdraw Dialog */}
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <ArrowDownCircleIcon /> {/* Different icon for Withdraw */}
                    <span className="text-sm mt-2">Withdraw</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Withdrawal</DialogTitle>
                  </DialogHeader>
                  <WithDraw />
                </DialogContent>
              </Dialog>

              {/* Transfer Dialog */}
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <ShuffleIcon />
                    <span className="text-sm mt-2">Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Transfer to Another Wallet</DialogTitle>
                  </DialogHeader>
                  <Transfer />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl  font-semibold">History</h1>
            <UpdateIcon className="h-7 w-7 cursor-pointer hover:text-gray-400"/>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-slate-800">
                  <Avatar>
              <AvatarFallback>
              <ShuffleIcon/>
              </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-xl font-semibold">Top Up</p>
                  <p className="text-sm">Today, 12:00 AM</p>
                </div>
              </div>
              <div className="text-xl font-semibold">+ ₹ 100</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-slate-800">
                <Avatar>
              <AvatarFallback>
              <ShuffleIcon/>
              </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-xl font-semibold">Withdraw</p>
                  <p className="text-sm">Today, 12:00 AM</p>
                </div>
              </div>
              <div className="text-xl font-semibold">- ₹ 100</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-slate-800">
                <Avatar>
              <AvatarFallback>
              <ShuffleIcon/>
              </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-xl font-semibold">Transfer</p>
                  <p className="text-sm">Today, 12:00 AM</p>
                </div>
              </div>
              <div className="text-xl font-semibold">- ₹ 100</div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Wallet;
