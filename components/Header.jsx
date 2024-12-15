// Header.jsx
"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header mo-left header container ">
      <div className="sticky-headers main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix dz-header">
          <div className="container clearfix header-padding">
            {/* website logo */}
            <div className="logo-header mostion logo-dark">
              <Link href="/">
                <img alt="" src="/images/skinstinct.png" width="200" height="75" />
              </Link>
            </div>
            
            {/* nav toggle button */}
            <button
              className={`navbar-toggler navicon justify-content-end ${isMenuOpen ? 'open' : 'collapsed'}`}
              type="button"
              onClick={handleToggleMenu}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded={isMenuOpen}
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
                    BOOKINGS
                  </button>
                </Link>
              </div>
            </div>

            {/* main nav */}
            <div
              className={`header-nav navbar-collapse collapse justify-content-LEFT ${isMenuOpen ? 'show' : ''}`}
              id="navbarNavDropdown"
            >
              <div className="logo-header d-md-block d-lg-none">
                <Link href="/">
                  <img alt="" src="/images/skinstinct.svg" width="258" height="75" />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <Nav onLinkClick={() => setIsMenuOpen(false)} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}