import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div id='contact-title'>
            <h2>Contact Us</h2>
        </div>
        <div id='contact-form'>
            <p>We'd love to hear from you. Please fill out the form below to get in touch.</p>
            <form className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required className="input-field" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required className="input-field" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={5} required className="input-field"></textarea>
            </div>
            <button type="submit" className="primary-btn">Submit</button>
        </form>
        </div>
      </section>
    </div>
  );
};

export default Contact; 