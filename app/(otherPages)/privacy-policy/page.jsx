import Footer15 from "@/components/Footer";
import Header1 from "@/components/Header";
import PrivacyPolicy from "@/components/otherPages/PrivacyPolicy";
import React from "react";

export const metadata = {
  title:
    "Privacy Policy | Skinstinct",
  description: "Skinstinct",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <PrivacyPolicy />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
