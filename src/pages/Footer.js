// src/components/Footer.js
import React from "react";
import "./FooterStyles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <h1>Trippy</h1>
        <button className="footer-button">Choose Your Destination</button>
        <div className="social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>

      <div className="footer-links">
        <div className="column">
          <h2>Project</h2>
          <p>Web App</p>
          <p>Landing</p>
          <p>Startup</p>
          <p>UI Kit</p>
          <p>Template</p>
          <p>Framework</p>
          <p>Toolbox</p>
        </div>

        <div className="column">
          <h2>Community</h2>
          <p>GitHub</p>
          <p>Discord</p>
          <p>Forum</p>
          <p>Events</p>
          <p>Meetups</p>
          <p>Talks</p>
          <p>Webinars</p>
        </div>

        <div className="column">
          <h2>Help</h2>
          <p>FAQ</p>
          <p>Support</p>
          <p>Guides</p>
          <p>Docs</p>
          <p>Tutorial</p>
          <p>Install</p>
          <p>Feedback</p>
        </div>

        <div className="column">
          <h2>Others</h2>
          <p>About</p>
          <p>Blog</p>
          <p>Team</p>
          <p>Careers</p>
          <p>Legal</p>
          <p>Terms</p>
          <p>Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
