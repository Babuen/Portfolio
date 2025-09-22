import React from "react";
import "./contact.css";
import FloatingIcons from "./floationg";

export default function Contact() {
  return (
    <>
        <h2 className="projects-title " style={{marginLeft:"30px"}}>Contact.</h2>
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <h3>GET IN TOUCH</h3>
        <form>
          <label>Your Name</label>
          <input type="text" placeholder="What's your good name?" />
          <label>Your Email</label>
          <input type="email" placeholder="What's your web address?" />
          <label>Your Message</label>
          <textarea placeholder="What you want to say?" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-right">
        <  FloatingIcons />
      </div>
    </section>
    </>
  );
}
