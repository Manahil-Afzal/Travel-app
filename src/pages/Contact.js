// src/pages/Contact.js
import React from "react";
import Form from "../pages/Form";
import "./FormStyles.css";
import Img3 from "../assets/8.jpg";

function Contact() {
  return (
    <div
      className="contact-hero"
      style={{
        backgroundImage: `url(${Img3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Full screen
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="contact-overlay">
        <h1 className="contact-heading">Contact Us</h1>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
