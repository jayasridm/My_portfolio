import React from 'react';

const MobileMenu = ({ onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <div className="mobile-menu show" id="mobileMenu">
      <a href="#home" onClick={handleClick} title="Home"><i className="fas fa-home"></i></a>
      <a href="#about" onClick={handleClick} title="About"><i className="fas fa-user"></i></a>
      <a href="#education" onClick={handleClick} title="Education"><i className="fas fa-graduation-cap"></i></a>
      <a href="#skills" onClick={handleClick} title="Skills"><i className="fas fa-code"></i></a>
      <a href="#projects" onClick={handleClick} title="Projects"><i className="fas fa-briefcase"></i></a>
      <a href="#contact" onClick={handleClick} title="Contact"><i className="fas fa-envelope"></i></a>
    </div>
  );
};

export default MobileMenu;
