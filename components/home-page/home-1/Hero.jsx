"use client";
import Image from "next/image";
import React from "react";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Insurance" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
  
      </div>
    </div>
  );
};

export default Hero1;
