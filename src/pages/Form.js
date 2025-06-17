
// src/components/Form.js
import React from "react";
import "./FormStyles.css";  // ✅ Correct CSS file name

function Form() {
  return (
    <div className="form-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">We would love to hear from you!</p>

      <form className="contact-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" rows="6" placeholder="Write your message..." required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );aa
}

export default Form;
