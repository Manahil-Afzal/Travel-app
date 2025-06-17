// src/pages/About.js
import React from "react";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import "../pages/AboutUsStyles.css"; // ✅ reuse styles (optional)

function About() {
  return (
    <>
  <Hero
  cName="hero about-hero"
  heroImg={AboutImg}
  title={<><a className="hero-btn">About</a></>}
/>

      {/* About content directly here */}
      <div className="about-container">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional travel experiences that create
            lasting memories and meaningful connections with the world.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become a global leader in tourism by offering personalized,
            sustainable, and enriching journeys to every corner of the earth.
          </p>
        </div>

        <div className="about-section">
          <h2>Our History</h2>
          <p>
            Founded in 2010, Trippy started with a single bus and a dream to
            connect travelers to unexplored destinations. Today, we operate
            worldwide, driven by passion and purpose.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
