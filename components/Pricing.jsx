import React from "react";
import Link from "next/link";
import Image from "next/image";
import { treatments } from "@/data/treatments";

export default function Pricing() {
  return (
    <>
    <h2 className="title text-center-mbl text-skinstinct-brown text-left-p-13 m-t40">Pricing</h2>
    <div className="treatment-grid">
      
      {treatments.map((treatment, index) => (
        <div key={index} className="treatment-card">
          <div className="image-wrapper">
            <Image src={treatment.imageSrc} alt={treatment.title} layout="fill" objectFit="cover"/>
          </div>
          <div className="content">
            <Link href={`/treatments/${treatment.slug}`} className="title-link">
              <h3 className="text-skinstinct-brown">{treatment.title}</h3>
            </Link>
            <div className="price">${treatment.price} <span>/ per session</span></div>
            {treatment.package && <div className="package">{treatment.package}</div>}
            <ul>
              {treatment.features.map((feature, i) => (
                <li key={i}><i className="fas fa-check"></i>{feature}</li>
              ))}
            </ul>
            
              <Link href="/contact" className="button dz-bannerbtn bg-button treatment-button">
                Enquire Now
              </Link>
        
          </div>
        </div>
      ))}
    </div>
    </>
  );
 }