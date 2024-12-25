import BlogSingle from "@/components/BlogSingle";
import Header3 from "@/components/Header3";
import { getBlogBySlug } from "@/data/blogs";
import Image from "next/image";

export const metadata = {
 title: "Blogs | Skinstinct",
 description: "Skinstinct", 
};

export default async function Page({ params }) {
 const blog = await getBlogBySlug(params.slug);
 
 if (!blog) return <div>Blog post not found</div>;

 return (
   <div className="page-wraper">
     <Header3 />
     <div className="page-content bg-white">
       <div className="content-area">
         <BlogSingle params={params} />
       </div>
     </div>
   </div>
 );
}