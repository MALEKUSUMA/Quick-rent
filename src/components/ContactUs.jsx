import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
