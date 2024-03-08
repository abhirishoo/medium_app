import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish=()=>{
    const navigate = useNavigate();  
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState<string>("");  

    return <div>
        <Appbar/>
        <div className=" w-1/2 mx-auto">
    <input onChange={(e)=>{
        setTitle(e.target.value)
    }} type="text" placeholder="Title" className="mt-5 block w-full p-4 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 text-base"/>
    </div>

     <div className="w-1/2 mx-auto">
    <label  className="block  text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea onChange={(e)=>{
         setDescription(e.target.value)
    }} rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none" placeholder="Write your article here..."></textarea>
    </div>   

    <button onClick={async ()=>{
       const response = await axios.post(`${BACKEND_URL}/api/v1/blog` , {
        title, 
        content: description
    },{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    });
    navigate(`/blog/${response.data.id}`)

    }} type="submit" className="text-white bg-blue-600 w-1/4 mx-[37.5%] mt-6 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Post</button>

    


    </div>
}