import React from 'react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Commerce (B.Com)',
      school: 'Alagappa Govt Arts College, Karaikudi',
      period: '2021 – 2024',
      details: 'Graduated with business administration, accounts, and market principles foundations.',
      icon: 'fas fa-graduation-cap',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Ranees Govt Hr Sec School',
      period: '2019 – 2021',
      details: 'Completed higher secondary education.',
      icon: 'fas fa-school',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      school: 'Govt High School',
      period: '2014 – 2019',
      details: 'Completed secondary education.',
      icon: 'fas fa-school',
    },
  ];

  const certificates = [
    {
      title: 'Digital Marketing Specialist',
      issuer: 'SFA Infotech (Chennai)',
      date: 'Sep 2025 – Sep 2026 (1 Year)',
      icon: 'fas fa-briefcase',
      description: 'Managing end-to-end Social Media Marketing (SMM) campaigns, Meta Ads, and content strategies to maximize brand visibility and engagement.',
    },
    {
      title: 'Digital Marketing Specialist (Freelancer)',
      issuer: 'Client Campaigns & Freelance Contracts',
      date: '2025 – Present (1 Year)',
      icon: 'fas fa-briefcase',
      description: 'Manage end-to-end Social Media Marketing (SMM) and paid ad campaigns. Setup Meta pixel tracking, crafted high-converting ad copies and creatives, achieving average 4.2x ROAS for client accounts.',
    },
    {
      title: 'Digital Marketing Intern (Social Media Marketing)',
      issuer: 'Tillit Solutions (Thousand Lights, Chennai)',
      date: '2025 (2 Months)',
      icon: 'fas fa-briefcase',
      description: 'Specialized in Social Media Marketing (SMM). Developed brand post calendar schedules, designed engaging Instagram/Facebook graphics, and tracked organic reach and user engagement to boost brand authority.',
    },
    {
      title: 'Digital Marketing Certification Course',
      issuer: 'Social Eagle Academy',
      date: '2025',
      icon: 'fas fa-certificate',
      description: 'Acquired in-depth expertise in Social Media Marketing (SMM), Meta Ads Manager, content strategy, and creative campaign design. Mastered audience targeting, reel engagement, and performance analytics across Instagram and Facebook.',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title reveal">
          My <span className="text-span">Education</span>
        </h2>
        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item reveal" key={`edu-${index}`}>
              <div className="timeline-icon">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content">
                <h4>{item.degree}</h4>
                <p className="text-muted">{item.school} · {item.period}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title reveal mt-5">
          Certifications & <span className="text-span">Training</span>
        </h2>
        <div className="timeline">
          {certificates.map((cert, index) => (
            <div className="timeline-item reveal" key={`cert-${index}`}>
              <div className="timeline-icon">
                <i className={cert.icon}></i>
              </div>
              <div className="timeline-content">
                <h4>{cert.title}</h4>
                <p className="text-muted">{cert.issuer} · {cert.date}</p>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
