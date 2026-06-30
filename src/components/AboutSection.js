import React from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaStar, FaBriefcase, FaLanguage, FaLaptopCode, FaPhone } from 'react-icons/fa';

const AboutSection = () => {
  const personalInfo = [
    { title: 'Name', value: 'Jayasri N', icon: <FaUser /> },
    { title: 'Phone', value: '8668028246', icon: <FaPhone /> }, // Replace Age with Phone as it's more relevant for contact
    { title: 'Email', value: 'njayasri694@gmail.com', icon: <FaEnvelope /> },
    { title: 'Location', value: 'Ekkattuthangal, Chennai', icon: <FaMapMarkerAlt /> },
  ];

  const professionalInfo = [
    { title: 'Experience', value: '1 Year (Digital Marketer)', icon: <FaBriefcase /> },
    { title: 'Focus Areas', value: 'SEO, SEM, Meta Ads, SMM, Content Marketing', icon: <FaLaptopCode /> },
    { title: 'Languages', value: 'English, Tamil', icon: <FaLanguage /> },
    { title: 'Availability', value: 'Full-Time', icon: <FaStar /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title reveal">
          About <span className="text-span">Me</span>
        </h2>
        <p className="about-lead reveal">
          I aim to be associated with a progressive organization which offers an excellent atmosphere to prove myself by utilizing all my digital marketing and technical knowledge into practice, delivering growth and valuable results for the development of the organization.
        </p>
        <div className="row justify-content-center g-4">
          <div className="col-lg-5 col-md-6">
            {personalInfo.map((item, index) => (
              <div className={`info-card reveal reveal-d${index+1}`} key={index}>
                <div className="info-icon">{item.icon}</div>
                <div>
                  <div className="info-label">{item.title}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-5 col-md-6">
            {professionalInfo.map((item, index) => (
              <div className={`info-card reveal reveal-d${index+1}`} key={index}>
                <div className="info-icon">{item.icon}</div>
                <div>
                  <div className="info-label">{item.title}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
