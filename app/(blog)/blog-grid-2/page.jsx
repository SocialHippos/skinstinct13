import Blog1 from "@/components/blogs/Blog1";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blog Grid 2 | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
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
                <h1 className="text-white">Blog grid 2</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Blog grid 2</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-area">
            <Blog1 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
