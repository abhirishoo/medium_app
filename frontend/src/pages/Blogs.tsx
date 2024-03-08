import { Appbar } from "../components/Appbar";
import { BlogCards } from "../components/BlogCards";
import { BlogSkeleton } from "../components/Blogskeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div className="lg:w-[1/2] w-[1/4] lg:mx-[25%] mt-[5rem]">
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
    ...
    </div>;
  }

  // Sort blogs based on id in decreasing order
  const sortedBlogs = blogs.sort((a, b) => b.id - a.id);

  return (
    <div>
      <Appbar />
      {sortedBlogs.map((blog) => (
        <BlogCards
          key={blog.id}
          id={blog.id}
          authorName={blog.author.name || "Anonymous"}
          title={blog.title}
          content={blog.content}
          publishedDate={"7th March 2024"}
        />
      ))}
    </div>
  );
};
