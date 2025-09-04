"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import newsletterImg from "@/public/images/newsletter.jpg";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Add your submit logic here
    console.log("Subscribed with:", email);
  };

  return (
    <div className="container">
      <div className="newsletter-section flex flex-col md:flex-row items-center justify-between bg-[#eac1a2]">
        {/* Left - Text and Form */}
        <div className="w-full md:w-1/2 p-8 style2">
          <h2 className="text-4xl font-light mb-3 title">Join<br/>Newsletter</h2>
          {/* <p className="mb-6 text-xs">
            Subscribe and receive updates on the latest rewards, treatments, offers, and more.
          </p> */}
          <form onSubmit={handleSubmit} className="flex-layout is-fixed">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="input-newsletter font-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="button dz-bannerbtn bg-button font-500"
            >
              SUBSCRIBE NOW
            </button>
          </form>
          <p className="text-xs mt-4">
            By sending the form you agree to the{" "}
            <Link href="/terms" className="underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>.
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 h-full">
          <Image
            src={newsletterImg}
            alt="Newsletter"
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}