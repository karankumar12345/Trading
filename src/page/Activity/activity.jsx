
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
const Activity = () => {
  const handleRemoveWatchList=()=>{
    alert("Remove WatchList")
}
return (
<div className="px-5 lg:p-20 ">
<h1 className="text-2xl font-bold pb-5">  Activity</h1>
     <Table className="border">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] py-3">Date & Time</TableHead>
      <TableHead>Treading Pair</TableHead>
      <TableHead>Buy Price</TableHead>
      <TableHead> Selling Price</TableHead>
      <TableHead>Order Type</TableHead>
      <TableHead >Profite/Loss</TableHead>
      <TableHead className=" text-red-600">Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1, 1, 1, 1, 1, 1].map((item, index) => (
      <TableRow key={index}>
            <TableCell><p>
              20024/12/4
              
              </p>
              <p>10:30:30</p>
              </TableCell>
        <TableCell className="font-medium flex items-center gap-2">
          <Avatar className="-z-50">
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70sz8P9MMtMpsRqJZ4Ei9LLwKiqbe73eLhw&s" />
          </Avatar>
          <span>BitCoin</span>
        </TableCell>
    
        <TableCell>9124463121</TableCell>
        <TableCell>1364881428323</TableCell>
        <TableCell>-0.2009</TableCell>
        <TableCell >$69249</TableCell>
        <TableCell >$69249</TableCell>

      </TableRow>
    ))}
  </TableBody>
</Table>
</div>
  )
}

export default Activity
