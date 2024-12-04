import { Button } from "@/components/ui/button"
import { useState } from "react"
import AssectTable from "./AssectTable"
import StockChart from "./StockChart"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DotIcon } from "@radix-ui/react-icons"
import { MessageCircle, ShieldCloseIcon } from "lucide-react"


const Home = () => {
    const [category,setCategory]=useState("all")
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleCategory=(category)=>{
        setCategory(category)
    }   
  return (
    <div className="relative">
        <div className="lg:flex">
            <div className="lg:w-[50%] lg:border-r">
                <div className="p-3 flex items-center gap-4">
                    <Button onClick={()=>handleCategory("all")} variant={category=="all"?"default":"outline"} className="rounded-full" >All</Button>
                    <Button onClick={()=>handleCategory("top50")} variant={category=="top50"?"default":"outline"} className="rounded-full" >top50</Button>
                    <Button onClick={()=>handleCategory("topGainers")} variant={category=="topGainers"?"default":"outline"} className="rounded-full" >topGainers</Button>
                    <Button onClick={()=>handleCategory("topLossers")} variant={category=="topLossers"?"default":"outline"} className="rounded-full" >topLossers</Button>

                </div>
                <AssectTable/>

            </div>
            <div className="hidden lg:block lg:w-[50%] p-5">
                <StockChart/>
                <div className="flex gap-5 items-center ">
                    <div>
                        <Avatar>
                            <AvatarImage src="https://wp-asset.groww.in/wp-content/uploads/2018/01/18123528/ethereum-1.jpg"></AvatarImage>
                        </Avatar>
                    </div>
                    <div>
                    <div className="flex items-center gap-2">
                        <p>ETH</p>
                        <DotIcon className="text-gray-400"></DotIcon>
                        <p className="text-gray-400">Ethereum</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-gray-400">5464</p>
                       
                        <p className="text-gray-400">-1239393.2020</p>
                    </div>
                    </div>
                </div>
             </div>
        </div>
        <>
      {/* Chat Bot Button */}
      <section className="fixed bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
        <div className="relative w-[8rem] md:w-[10rem] lg:w-[12rem] cursor-pointer group">
          <Button
            className="w-full h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] gap-2 items-center"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            <span className="text-sm md:text-lg lg:text-xl">Chat Bot</span>
          </Button>
        </div>
      </section>

      {/* Chat Message Bar */}
      {isChatOpen && (
        <div className="fixed bottom-[5rem] right-5 z-50  text-black bg-gray-900 shadow-lg rounded-lg w-[90%] md:w-[400px] p-4 md:bottom-[8rem] lg:bottom-[10rem]">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold">Chat with Us</h3>
            <Button
              className="text-red-500"
              onClick={() => setIsChatOpen(false)}
            >
            <ShieldCloseIcon/>
            </Button>
          </div>
          <div className="h-[200px] overflow-y-auto text-black">
            {/* Chat messages */}
            <p className="text-sm ">Hello! How can I help you?</p>
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="w-full bg-black text-white border rounded-lg px-3 py-2"
              placeholder="Type your message..."
            />
            <Button className="mt-2 w-full">Send</Button>
          </div>
        </div>
      )}
    </>



      
    </div>
  )
}

export default Home
