import { Link } from "react-router-dom";

interface BlogCardProps{
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id:number
}

export const BlogCards = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps)=>{
        return <div className="p-3  w-full lg:w-1/2  mx-auto ">
        <Link to={`/blog/${id}`}>
        <div className="flex">
        <div className="flex justify-center  flex-col">
        <Avatar name={authorName} />
        </div>
      <div className="text-slate-700 text-lg pl-2"> {authorName} </div> 
      <div className="flex justify-center pl-2 flex-col">  <Dot/></div>
      <div className="pl-2 flex justify-center  flex-col text-slate-500 text-sm font-thin"> {publishedDate}</div>
    </div>
    <div className="font-black  text-lg lg:text-3xl font-['Neue_Montreal']">
        {title}
    </div>
    <div className="text-sm lg:text-lg">
        {content.slice(0,100)+ "..."}
    </div>
    <div className="mt-5 text-slate-600 mb-3">
        {`${Math.ceil((content.length)/100)} minute(s) read. `}
    </div>
    <div className="border "></div>
    </Link>
    </div>
}

export function Avatar({ name }: { name:string }){
    return <div className="relative inline-flex items-center justify-center w-7 h-7  overflow-hidden dark:bg-gray-600 rounded-full ">
    <span className="text-xs dark:text-gray-300 ">{name[0]}</span>
</div>
}

function Dot(){
    return <div className="rounded full  bg-slate-600  w-1 h-1   ">

    </div>
}