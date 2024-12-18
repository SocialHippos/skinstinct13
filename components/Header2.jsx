"use client";

import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socials";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
export default function Header2() {
  return (
    <header className="site-header mo-left header-transparent header navstyle1">
      {/* main header */}
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="  clearfix">
            {/* website logo */}
            <div className="logo-header mostion ">
            <Link href="/">
                <Image alt="" src="/images/skinstinct-white.svg" width="258" height="75" />
              </Link>
            </div>
            {/* nav toggle button */}
            <button
              className="navbar-toggler collapsed navicon justify-content-start"
              type="button"
              onClick={toggleMobileMenu}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            {/* extra nav */}
            <div className="extra-nav border-0">
              <div className="extra-cell d-flex align-items-center gap-5 gap-xl-3 d-none d-lg-flex">
                <Link href="/contact">
                  <button className="button dz-bannerbtn bg-button" type="button">
                    BOOKING
                  </button>
                </Link>
              </div>
            </div>

            {/* main nav */}
            <div
              className="header-nav navbar-collapse collapse justify-content-start"
              id="navbarNavDropdown"
            >
              <div className="logo-header d-md-block d-lg-none">
              <Link href="/">
                <Image alt="" src="/images/skinstinct.svg" width="258" height="75" />
              </Link>
              </div>
              <ul className="nav navbar-nav">
                <Nav />
              </ul>
              <div className="dlab-social-icon">
                <ul>
                  {socialLinks.map((elm, i) => (
                    <React.Fragment key={i}>
                      <li>
                        <a
                          className={`site-button sharp-sm  ${elm.className}`}
                          href={elm.href}
                        />
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main header END */}
    </header>
  );
}
