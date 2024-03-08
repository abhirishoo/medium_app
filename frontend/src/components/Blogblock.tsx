import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCards"


export const Blogblock=({ blog } : {blog: Blog})=>{
    return <div>
        <Appbar/>
    <div className="grid lg:grid-cols-12 lg:p-20 py-10 px-5  lg:px-[15rem] w-full">
        <div className="lg:col-span-8   ">
            <div className="lg:text-5xl text-xl mb-1 font-black">
                 {blog.title}
            </div>
            <div className="text-slate-500 mb-3 text-sm lg:text-lg font-light">Posted on 8th March 2024</div>
            <div className="text-slate-600 mb-10">
            {blog.content}
            </div>
        </div>
        <div className="lg:col-span-4 col-span-6 ">
            <div className=" lg:my-2 lg:text-lg  text-xs">Author</div>
            <div className="flex ">
                <div className="flex justify-center flex-col mr-4"><Avatar name={blog.author.name || "Anonymous"}/></div>
                <div className="lg:text-2xl text-sm font-semibold flex flex-col">
                    {blog.author.name || "Anonymous"}
                    <div className="font-normal lg:text-sm text-xs  text-slate-700">Random catch phrase about the ability to grab the users attention</div>
                 </div>
            
   
     </div>      
</div>
    </div>
    </div> 
}