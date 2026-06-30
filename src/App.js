import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileToggleButton from './components/MobileToggleButton';
import MobileMenu from './components/MobileMenu';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CampaignGallery from './components/CampaignGallery';
import ExtraCurricularSection from './components/ExtraCurricularSection';
import EducationSection from './components/EducationSection';
import HomeSection from './components/HomeSection';
import './style.css';

const App = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => setMobileMenuVisible(prev => !prev);
  const closeMobileMenu = () => setMobileMenuVisible(false);

  // Smooth scroll
  useEffect(() => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
      }
      closeMobileMenu();
    };
    navLinks.forEach(link => link.addEventListener('click', handleClick));
    return () => navLinks.forEach(link => link.removeEventListener('click', handleClick));
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.reveal, .timeline-item');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mobileMenuVisible &&
        !e.target.closest('#mobileMenu') &&
        !e.target.closest('.mobile-toggle')) {
        closeMobileMenu();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [mobileMenuVisible]);

  return (
    <>
      <Navbar />
      <MobileToggleButton onClick={toggleMobileMenu} isOpen={mobileMenuVisible} />
      {mobileMenuVisible && <MobileMenu onClose={closeMobileMenu} />}
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CampaignGallery />
      <ExtraCurricularSection />
      <ContactSection />
      <footer className="footer">
        <p>Designed & Built by <span>Jayasri N</span> · 2026</p>
      </footer>
    </>
  );
};

export default App;
