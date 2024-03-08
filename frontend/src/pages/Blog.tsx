import { Blogblock } from "../components/Blogblock";
import { BlogSkeleton } from "../components/Blogskeleton";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = ()=>{
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id:id || ""
    });
    if(loading){
        return <div className="w-[1/2] lg:mx-[25%] mt-[7rem]">
            <BlogSkeleton/>
        </div>
    }
    return <div>
       <Blogblock blog={blog} />
       
    </div>
        
}