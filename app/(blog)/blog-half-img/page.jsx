import Link from "next/link";
import Blogs8 from "@/components/blogs/Blogs8";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import React from "react";

export const metadata = {
  title:
    "Blog Half Image | Skinstinct",
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
                <h1 className="text-skinstinct-brown">Blog Half Image</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Blog Half Image</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <Blogs8 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
