import React from "react";
import "./ServiceStyles.css";
import Img10 from "../assets/10.jpg";

function Service() {
  return (
    <div className="service-hero">
      <div className="service-overlay">
        <h1>Our Services</h1>
        <p>
          We help you plan unforgettable trips, design websites for tourism, and 
          offer digital solutions for travel bloggers and groups. Let us guide you 
          on your next adventure.
        </p>
      </div>
      <img src={Img10} alt="Our Services" className="service-bg-image" />
    </div>
  );
}

export default Service;
