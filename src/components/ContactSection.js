import React, { useState } from 'react';
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendWhatsApp = () => {
    const { name, email, subject, message } = formData;
    const text = `Hi Jayasri,\n\nI found your portfolio and wanted to reach out.\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918668028246?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title reveal">
          Get In <span className="text-span">Touch</span>
        </h2>
        <div className="row g-5 align-items-start">
          <div className="col-md-5 reveal">
            <h3 className="contact-heading">Let's Grow Your <span className="text-span">Brand</span></h3>
            <p className="contact-text">
              I'm currently open to freelance opportunities, contract roles, or full-time positions. If you want to discuss a campaign, audit your current marketing setup, or just connect — drop me a message!
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaEnvelope /></div>
              <div>
                <div className="contact-detail-label">Email</div>
                <a href="mailto:njayasri694@gmail.com" className="contact-detail-value">njayasri694@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaPhone /></div>
              <div>
                <div className="contact-detail-label">Phone</div>
                <a href="tel:+918668028246" className="contact-detail-value">+91 86680 28246</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
              <div>
                <div className="contact-detail-label">Location</div>
                <span className="contact-detail-value">9/3 Ekkattuthangal, Chennai - 600032</span>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://wa.me/918668028246" className="icon-circle" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://in.linkedin.com/in/n-jaya-sri-" className="icon-circle" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/sri_marketing_catalyst?igsh=eTZ5bTBkeGw4OXZp" className="icon-circle" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram />
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.938813359556!2d80.17062402120302!3d12.980649987819194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668502390a31%3a0xc2ffb8d4c9d5c411!2sPorur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715694380687!5m2!1sen!2sin"
              width="100%" height="220"
              style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>

          <div className="col-md-7 reveal reveal-d2">
            <div className="contact-form-wrap">
              <h5 style={{fontFamily:'Syne,sans-serif', fontWeight:700, color:'#fff', marginBottom:'1.5rem', fontSize:'1.1rem'}}>Send a Message</h5>
              <div className="mb-4">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" className="form-control" placeholder="Jane Doe" value={formData.name} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="form-label">Email Address</label>
                <input type="email" name="email" className="form-control" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" className="form-control" placeholder="Partnership / Campaign Query" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="5" placeholder="Hi Jayasrii, I'd love to discuss marketing for..." value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="button" className="btn-submit" onClick={handleSendWhatsApp}>Send Message →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
