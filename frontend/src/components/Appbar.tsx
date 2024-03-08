import { Link } from "react-router-dom"
import { Avatar } from "./BlogCards"
export const Appbar =()=>{
    return <div className="border w-full  flex justify-between px-3 lg:px-10  ">
        <Link to={'/blogs'}>
        <div className="flex justify-between flex-col">
            <img className="w-[100px]" src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png" alt="" />
        </div>
        </Link>
        <div className="flex justify-center flex-row my-4">
           
            <div className="mr-2">  <Link to={"/publish"}> <button type="button" className="focus:outline-none  text-white bg-green-600 hover:bg-green-700  focus:ring-green-300 font-medium rounded-full text-sm px-3 py-1 ">Publish</button>
            </Link>
            </div>
       
            <Avatar name="Abhijeet"/>
        </div>

    </div>
}