import BlogSingle from "@/components/blogs/BlogSingle";
import Link from "next/link";
import Comment from "@/components/blogs/Comment";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import React from "react";
import { allBlogs } from "@/data/blogs";

export const metadata = {
  title: "Blog Single | Skinstinct",
  description: "Skinstinct",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const blogItem =
    allBlogs.filter((elm) => elm.title == slug)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr  bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-skinstinct-brown">Blog Single</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Blog Single</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <div className="container max-w900">
              <BlogSingle blogItem={blogItem} />
              <Comment />
            </div>
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
