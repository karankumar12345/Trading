import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import Sidebar from "./Sidebar"
  


const Navbar = () => {
  return (
    <div className='px-2 py-3  border-b z-50  bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-end'>
        <div className='flex items-center gap-3'>
        <Sheet>
  <SheetTrigger>
    <Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
      <DragHandleHorizontalIcon className="h-10 w-10" />
    </Button>
  </SheetTrigger>
  <SheetContent className="w-72 border-r-0 flex flex-col justify-center " side="left">
    <SheetHeader>
      <SheetTitle>
        <div className="tezt-3xl flex justify-center items-center">
<Avatar>
  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70sz8P9MMtMpsRqJZ4Ei9LLwKiqbe73eLhw&s" />
</Avatar>
<div>
  <span className="font-bold text-orange-700">Failure</span>
  <span>Tread</span>
</div>
        </div>
      </SheetTitle>
   
    </SheetHeader>
    <Sidebar/>
  </SheetContent>
</Sheet>
<p className="text-sm lg:text-base cursor-pointer">
  Failure Treading
</p>
<div className="p-0 ml-9">
  <Button variant="outline" className=" flex items-center gap-3">
    <MagnifyingGlassIcon/>
    <span>Search</span>
  </Button>

</div>

        </div>

      <div>
        <Avatar>
          <AvatarFallback>
            F
          </AvatarFallback>
        </Avatar>
      </div>
    </div>

  )
}

export default Navbar
