import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import HelpDesk from "@/components/otherPages/HelpDesk";
import React from "react";

export const metadata = {
  title: "Help Desk | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <HelpDesk />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
