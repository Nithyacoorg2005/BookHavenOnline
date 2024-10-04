import React, { useState } from 'react';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-us-container">
      <header className="contact-header">
        <h1 style={{marginTop:"100px"}}>Contact   BookHavenOnline</h1>
        <p>We'd love to hear from you! Feel free to get in touch with us.</p>
      </header>

      <section className="map-section">
        <h2 style={{padding:"20px"}}>Find Us</h2>
        <div className="map">
          <iframe style={{width:"600px",height:"300px"}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160988144!2d72.741099!3d19.082197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be295b4d7e6f27b%3A0x3c2bcb56524f0df1!2sMumbai!5e0!3m2!1sen!2sin!4v1630506817402!5m2!1sen!2sin"
            
          
            loading="lazy"
          ></iframe>
        </div>
      </section>

     
      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {formSubmitted && (
          <div className="form-confirmation">
            <h3>Thank you! We will get back to you shortly.</h3>
            <img src="https://media.tenor.com/YHy9KprQx5AAAAAi/girl-bubble.gif" alt="Success" />
          </div>
        )}
      </section>

      <section className="additional-contact-section">
        <div className="quick-links">
          
         
        </div>

        
      </section>
    </div>
  );
};

export default ContactUsPage;
