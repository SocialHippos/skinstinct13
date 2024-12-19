// Portfolio2.js
"use client";
import { portfolioItems3 } from "@/data/projects";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio2() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".card-container",
      layoutMode: "masonry",
    });

    imagesloaded(isotopContainer.current).on("progress", function () {
      isotope.current.layout();
    });
  };

  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
  };

  useEffect(() => {
    // Initialize Intersection Observer for mobile animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe all card containers
    const cardContainers = document.querySelectorAll('.card-container');
    cardContainers.forEach((container) => observer.observe(container));

    // Initialize Isotope
    initIsotop();

    // Cleanup
    return () => {
      cardContainers.forEach((container) => observer.unobserve(container));
    };
  }, []);

  return (
    <>
      <div className="section-full content-inner-2 portfolio text-uppercase treatment-bg" id="portfolio">
        <div className="container">
          <div className="clearfix" id="lightgallery">
            <ul
              id="masonry"
              ref={isotopContainer}
              className="portfolio-ic dlab-gallery-listing gallery-grid-4 lightgallery text-center"
            >
              {portfolioItems3.slice(0, 3).map((item, index) => (
                <li
                  className={`${item.filter} card-container col-lg-4 col-md-6 col-sm-6 p-a0`}
                  key={index}
                >
                  <div className="dlab-box dlab-gallery-box">
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                      <Link href={`/treatments/${item.slug}`} className="treatment-box-img">
                        <Image
                          src={item.imageSrc}
                          width={650}
                          height={528}
                          alt=""
                        />
                      </Link>
                      
                      <div className="dez-info">
                        <h4 className="dezTitle" style={{ textTransform: "capitalize" }}>
                          <Link href={`/treatments/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h4>
                      </div>

                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="center">
              <button className="button dz-bannerbtn bg-button treatment-button" type="button">
                ALL TREATMENTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}