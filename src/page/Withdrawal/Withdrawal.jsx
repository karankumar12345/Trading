
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Withdrawal = () => {
//   const handleRemoveWatchList=()=>{
//     alert("Remove WatchList")
// }
return (
<div className="px-5 lg:p-20 ">
<h1 className="text-2xl font-bold pb-5">  Withdrawal</h1>
     <Table className="border">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] py-3">Date </TableHead>
      <TableHead>Method</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead> Status</TableHead>
   
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1, 1, 1, 1, 1, 1].map((item, index) => (
      <TableRow key={index}>
            <TableCell><p>
       dec 4,2024 at 10:00 Am
              </p>
             
              </TableCell>
  
    
        <TableCell>9124463121</TableCell>
        <TableCell>9124463121</TableCell>
        <TableCell>1364881428323</TableCell>
    
      

      </TableRow>
    ))}
  </TableBody>
</Table>
</div>
  )
}
export default Withdrawal
