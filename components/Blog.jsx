import { getBlogs } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/common/Pagination";

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <>
      <h2 className="title text-center-mbl text-skinstinct-brown text-left-p-13 m-b30">Blogs</h2>
      <div className="container">
        <div id="masonry" className="dlab-blog-grid-2 row" style={{ width: "100%" }}>
          {blogs.map((blog, i) => {
            const date = new Date(blog.createdAt);
            
            return (
              <div key={i} className="post card-container col-lg-6 col-md-6 col-sm-12">
                <div className="blog-post blog-grid blog-rounded blog-effect1">
                  <div className="dlab-post-media dlab-img-effect">
                    <Link href={`/blogs/${blog.slug}`}>
                      <Image alt={blog.title} src={blog.image} width="700" height="500" />
                    </Link>
                  </div>
                  <div className="dlab-info p-a20 border-1">
                    <div className="dlab-post-meta">
                      <ul>
                        <li className="post-date">
                          <strong>{date.getDate()} {date.toLocaleString('default', { month: 'short' })}</strong>{" "}
                          <span>{date.getFullYear()}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="dlab-post-title">
                      <h4 className="post-title">
                        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h4>
                    </div>
                    <div className="dlab-post-readmore">
                      <Link href={`/blogs/${blog.slug}`} className="site-button">
                        READ MORE
                        <i className="ti-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}