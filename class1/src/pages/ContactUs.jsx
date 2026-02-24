import React from "react";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dhfu65b",   // Your EmailJS Service ID
        "template_fr1qghb",  // Your EmailJS Template ID
        e.target,
        "JkbJCPDkoqATTYthi"    // Your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-section">
      <div className="contact-overlay">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>4671 Sugar Camp Road,<br />Owatonna, Minnesota, 55060</p>
          <p>Phone: 507-475-6094</p>
          <p>Email: wrub7d78t0@temporary-mail.net</p>
        </div>

        <div className="contact-right">
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            {/* This will be the recipient */}
            <input
              type="email"
              name="to_email"
              placeholder="Recipient Email"
              required
            />
            <textarea
              name="message"
              placeholder="Type your message..."
              rows="4"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
