import Contact from "@/components/Contact";
import React from "react";

export const metadata = {
  title: "Contact | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <div className="page-content bg-white">
          <Contact />
        </div>
      </div>
    </>
  );
}
