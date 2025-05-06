import React from "react";

export default function ContactPage() {
  return (
    <div className="container contact-page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <section>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! Reach out through any of these channels:</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📧</span>
                <span>support@shopsphere.com</span>
              </div>
              <div className="contact-method">
                <span className="contact-icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-method">
                <span className="contact-icon">🏢</span>
                <span>123 Commerce St, Tech City, TC 10001</span>
              </div>
            </div>
          </section>
          
          <section className="business-hours">
            <h2>Business Hours</h2>
            <ul>
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </section>
        </div>
        
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}