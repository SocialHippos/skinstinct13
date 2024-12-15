import Link from "next/link";
import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";

export const metadata = {
  title:
    "Portfolio Details | Skinstinct",
  description: "Skinstinct",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const projectItem =
    allProjects.filter((elm) => elm.title == slug)[0] || allProjects[0];

  return (
    <>
      <div className="page-wraper  ">
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr  bg-pt"
            style={{ backgroundColor: "#febe98" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Portfolio Detail</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    
                    <li>Portfolio</li>
                    <li>Portfolio Detail</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <ProjectDetails projectItem={projectItem} />
          </div>
        </div>
      </div>
    </>
  );
}
