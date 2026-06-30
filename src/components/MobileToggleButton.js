import React from 'react';

const MobileToggleButton = ({ onClick, isOpen }) => {
  return (
    <button className="mobile-toggle" aria-label="Toggle navigation" onClick={onClick}>
      <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
    </button>
  );
};

export default MobileToggleButton;
