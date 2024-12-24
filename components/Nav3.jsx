// Nav.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav({ onLinkClick }) {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState("");

  useEffect(() => {
    setIsLargeScreen(window.innerWidth > 991);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 991);
      
      const headerElement = document.querySelector(".header");
      if (headerElement) {
        const newHeight = headerElement.offsetHeight;
        setHeaderHeight(newHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    if (!isLargeScreen) {
      onLinkClick?.();
      setMenuOpen1("");
    }
  };

  const isMenuActive = (path) => {
    return pathname === path;
  };

  const megaMenuHeight = isLargeScreen
    ? `calc(100vh - ${headerHeight}px)`
    : "auto";

  return (
    <>
      <li
        className={`has-mega-menu homedemo ${
          menuOpen1 === "home" ? "open" : ""
        } ${isMenuActive("/") ? "active" : ""}`}
      >
  
      </li>

      <li className={`has-mega-menu homedemo ${isMenuActive("/about") ? "active" : ""}`}>
        <Link className="text-skinstinct-brown" href="/about" onClick={handleLinkClick}>
          ABOUT US
        </Link>
      </li>

      <li className={`has-mega-menu homedemo ${isMenuActive("/treatments") ? "active" : ""}`}>
        <Link href="/treatments" onClick={handleLinkClick}>
          TREATMENTS
        </Link>
      </li>

      <li className={`has-mega-menu homedemo ${isMenuActive("/pricing") ? "active" : ""}`}>
        <Link href="/pricing" onClick={handleLinkClick}>
          PRICING
        </Link>
      </li>

      <li className={`has-mega-menu homedemo ${isMenuActive("/contact") ? "active" : ""}`}>
        <Link href="/contact" onClick={handleLinkClick}>
          CONTACT
        </Link>
      </li>
    </>
  );
}