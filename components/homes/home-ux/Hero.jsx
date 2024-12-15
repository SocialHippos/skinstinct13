"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          padding: "10px",
        }}
        onClick={onClick}
      >
        <span style={{ color: "#ffff", fontSize: "18px" }}> -→ </span>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          padding: "10px",
          
        }}
        onClick={onClick}
      >
        <span style={{ color: "white", fontSize: "18px" }}>←</span>
      </div>
    );
  };

  const settings = {
    dots: true,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    autoplay: true,  
    autoplaySpeed: 3000,  
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />,  
  };

  const images = [
    "/images/banner/img1.png",
    "/images/banner/img2.png",
    "/images/banner/img3.png",
   
  ];

  return (
    <div style={{ padding: "0", margin: "0", height: "100vh", overflow: "hidden" }}>
     
      <Slider {...settings} style={{ height: "100%" }}>
        {images.map((img, index) => (
          <div className="slider"
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",  
              width: "100vw",   
              opacity:2,
            }}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",   
                height: "100%",  
                objectFit: "cover", 
                borderRadius: "8px",
            
              }}
            />
          </div>
        ))}
      </Slider>
      
    </div>
 
    
  );
};

export default Hero;
