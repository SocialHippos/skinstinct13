import Blogs12 from "@/components/blogs/Blogs12";
import Link from "next/link";
import Blogs9 from "@/components/blogs/Blogs9";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import React from "react";

export const metadata = {
  title:
    "Blog Large Image Left Sidebar | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          {" "}
          <div
            className="dlab-bnr-inr  bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-skinstinct-brown">Blog Large Image Sidebar Left</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Blog Large Image Sidebar Left</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <Blogs9 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
