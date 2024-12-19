import Faq2 from "@/components/faq/Faq2";
import Faq3 from "@/components/faq/Faq3";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Faq 2 | Skinstinct",
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
            style={{ backgroundColor: "#febe98" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-skinstinct-brown">Faq 2</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Faq 2</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Faq2 />
            <Faq3 />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
