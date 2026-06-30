import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="md" fixed="top" className="custom-navbar-shadow desktop-navbar">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2">
          <img
            src={`${process.env.PUBLIC_URL}/image/profile_image.jpeg`}
            alt="Jayasri"
            className="rounded-circle"
            width="38"
            height="38"
            style={{ objectFit: 'cover' }}
          />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a' }}>
            Jayasri<span style={{ color: '#22c55e' }}>.</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="menu-item">Home</Nav.Link>
            <Nav.Link href="#about" className="menu-item">About</Nav.Link>
            <Nav.Link href="#education" className="menu-item">Education</Nav.Link>
            <Nav.Link href="#skills" className="menu-item">Skills</Nav.Link>
            <Nav.Link href="#projects" className="menu-item">Videos</Nav.Link>
            <Nav.Link href="#gallery" className="menu-item">Gallery</Nav.Link>
            <Nav.Link href="#contact" className="menu-item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;