"use client";

import React, { useState, useEffect } from "react";
import Nav3 from "./Nav3";
import Image from "next/image";
import Link from "next/link";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";

export default function Header3() {
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldAddMargin, setShouldAddMargin] = useState(false);

  
    useEffect(() => {
      const handleScroll = () => {
        // Check for fixed header
        const viewportHeight = window.innerHeight;
        const isFixed = window.scrollY > viewportHeight * 0;
        setIsFixed(isFixed);
  
        // Check scroll direction for margin
        if (window.scrollY > lastScrollY) {
          setShouldAddMargin(true);
        } else {
          setShouldAddMargin(false);
        }
        setLastScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

  return (
    <header 
      className={`site-header mo-left header navstyle1 ${isFixed ? 'fixed-header' : ''}`} 
      style={{ 
        background: "#febe98",
        position: isFixed ? 'fixed' : 'relative',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000
      }}
    ><div className={`sticky-header navbar-expand-lg ${isFixed ? 'is-fixed' : ''}`}>
       <div className={`main-bar clearfix ${shouldAddMargin ? 'margin-top-20s' : ''}`}
              style={{ 
                background: "#febe98",borderBottom: "1px solid #9b4b26",}}>
          <div className="full-width-container clearfix">
            {/* Desktop header wrapper */}
            <div className="d-none d-lg-flex align-items-center w-100">
              {/* Left section with logo and nav */}
              <div className="d-flex align-items-center">
                <div className="logo-header me-4">
                  <Link href="/">
                    <Image
                      alt=""
                      src="/images/skinstinct-dark.svg"
                      width={258}
                      height={75}
                      priority
                    />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="header-nav">
                  <ul className="nav navbar-nav nav3">
                    <Nav3 />
                  </ul>
                </div>
              </div>

              {/* Desktop booking button - pushed to right */}
              <div className="extra-nav border-0 ms-auto">
                <div className="extra-cell d-flex align-items-center gap-5 gap-xl-3">
                  <Link href="/contact">
                    <button className="button dz-bannerbtn bg-button treatment-button" type="button">
                      BOOKING
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile header and menu */}
            <div className="d-lg-none">
              {/* Mobile header wrapper */}
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="logo-header">
                  <Link href="/">
                    <Image 
                      alt="" 
                      src="/images/skinstinct-dark.svg"
                      width={258} 
                      height={75}
                      priority
                    />
                  </Link>
                </div>
                
                <button
                  className="navbar-toggler collapsed navicon"
                  type="button"
                  onClick={toggleMobileMenu}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span ></span>
                  <span ></span>
                  <span ></span>
                </button>
              </div>

              {/* Mobile menu */}
              <div
                className="header-nav navbar-collapse collapse justify-content-start mobile-menu-slide"
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav">
                  <Nav3 />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}