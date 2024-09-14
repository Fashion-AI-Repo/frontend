"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import './Hero.css';

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="hero-banner-two position-relative pt-120 lg-pt-200 md-pt-150">
        <div className="d">
          <div className="left">
            <p>MEN</p>
            <br />
            <p>WOMEN</p>
          </div>

          <div className="right">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="color-palette">
              <div>
                <button style={{ backgroundColor: 'red' }}></button>
                <button style={{ backgroundColor: 'blue' }}></button>
                <button style={{ backgroundColor: 'green' }}></button>
              </div>
              <div>
                <button style={{ backgroundColor: 'red' }}></button>
                <button style={{ backgroundColor: 'blue' }}></button>
                <button style={{ backgroundColor: 'green' }}></button>
              </div>
            </div>
            <div className="dropdown">
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
