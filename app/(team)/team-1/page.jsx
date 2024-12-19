import ClientSlider from "@/components/common/ClientSlider";
import Link from "next/link";
import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import Team1 from "@/components/team/Team1";
import React from "react";

export const metadata = {
  title: "Team 1 | Skinstinct",
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
                <h1 className="text-skinstinct-brown">Team</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Team</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Team1 />
            <div className="section-full content-inner bg-gray">
              <div className="container overflow-hidden">
                <ClientSlider />
              </div>
            </div>
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
