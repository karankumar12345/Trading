
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
const WatchList = () => {
    const handleRemoveWatchList=()=>{
        alert("Remove WatchList")
    }
  return (
    <div className="px-5 lg:p-20 ">
    <h1 className="text-2xl font-bold pb-5"> WatchList</h1>
         <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] py-3">Coin</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead> Change</TableHead>
          <TableHead>Change%</TableHead>
          <TableHead className="text-right">VOLUME</TableHead>
          <TableHead className="text-right text-red-600">REMOVE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium flex items-center gap-2">
              <Avatar className="-z-50">
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70sz8P9MMtMpsRqJZ4Ei9LLwKiqbe73eLhw&s" />
              </Avatar>
              <span>BitCoin</span>
            </TableCell>
            <TableCell>BTC</TableCell>
            <TableCell>9124463121</TableCell>
            <TableCell>1364881428323</TableCell>
            <TableCell>-0.2009</TableCell>
            <TableCell className="text-right">$69249</TableCell>
            <TableCell className="text-right"><Button onClick={()=>handleRemoveWatchList(item.id)} size="icon" className="h-10 w-10"><BookmarkFilledIcon/></Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default WatchList
