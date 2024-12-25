import { getBlogBySlug } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default async function BlogSingle({ params }) {
 const blog = await getBlogBySlug(params.slug);
 const date = new Date(blog.createdAt);

 return (
   <div className="container blog-post blog-single">
     <div className="dlab-post-meta m-b20">
       <ul>
         <li className="post-date">
           <strong>{date.getDate()} {date.toLocaleString('default', { month: 'short' })}</strong>
           <span>{date.getFullYear()}</span>
         </li>
       </ul>
     </div>
     <div className="dlab-post-title">
       <h4 className="post-title m-t0">{blog.title}</h4>
     </div>
     <div className="dlab-post-media dlab-img-effect zoom-slow">
       <Image
         src={blog.image}
         alt={blog.title}
         width={1000}
         height={600}
       />
     </div>
     <div className="dlab-post-text">
       <p>{blog.desccription}</p>
     </div>
     <div className="dlab-divider bg-gray-dark" />
     <div className="dlab-post-tags clear">
       <div className="post-tags">
         {blog.tags.map((tag, i) => (
           <Link key={i} href="#">{tag}</Link>
         ))}
       </div>
     </div>
   </div>
 );
}