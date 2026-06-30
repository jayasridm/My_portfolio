import React from 'react';
import { 
  SiGoogleads, 
  SiMeta, 
  SiLinkedin, 
  SiCanva, 
  SiMailchimp, 
  SiAdobepremierepro 
} from 'react-icons/si';
import { 
  FaSearch, 
  FaPenNib, 
  FaShareAlt, 
  FaCogs,
  FaMicrophone,
  FaVideo
} from 'react-icons/fa';

const SkillsSection = () => {
  const skills = [
    { icon: <FaSearch size={40} color="#3b82f6" />, name: "SEO Optimization" },
    { icon: <SiGoogleads size={40} color="#4285F4" />, name: "Google Ads (SEM)" },
    { icon: <SiMeta size={40} color="#0668E1" />, name: "Meta Ads Manager" },
    { icon: <SiLinkedin size={40} color="#0A66C2" />, name: "LinkedIn Ads" },
    { icon: <SiCanva size={40} color="#00C4CC" />, name: "Canva Design" },
    { icon: <SiAdobepremierepro size={40} color="#9900EF" />, name: "Adobe Premiere Pro" },
    { icon: <SiMailchimp size={40} color="#000000" />, name: "Mailchimp & Email Marketing" },
    { icon: <FaVideo size={40} color="#2563EB" />, name: "CapCut Video Editing" },
    { icon: <FaMicrophone size={40} color="#8B5CF6" />, name: "Voice Over" },
    { icon: <FaPenNib size={40} color="#10b981" />, name: "Content Copywriting" },
    { icon: <FaShareAlt size={40} color="#ec4899" />, name: "Social Media Marketing" },
    { icon: <FaCogs size={40} color="#f43f5e" />, name: "Automation" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title reveal">
          My <span className="text-span">Skills</span>
        </h2>
        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div key={index} className={`col-6 col-md-2 reveal reveal-d${(index % 5) + 1}`}>
              <div className="skill-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px' }}>
                {skill.icon}
              </div>
              <p className="skill-name text-center mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
