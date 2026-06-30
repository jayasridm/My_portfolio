import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          <div className="col-lg-6 col-md-7">
             <p className="home-greeting">Hello, I'm</p>
            <h1 className="home-title">
              <span className="accent">Jayasri</span><br />
              <span className="outline">Digital</span><br />
              Marketer
            </h1>
            <p className="home-desc">
              Results-driven Digital Marketing Specialist with 1+ years of experience managing paid ad campaigns, driving organic SEO growth, and crafting engaging brand narratives that convert.
            </p>
            <div className="home-btns">
              <a href="#contact" className="btn-primary-custom">Get In Touch</a>
              <a href="#gallery" className="btn-outline-custom">View Campaigns</a>
            </div>
            <div className="stats-bar">
              <div className="stat-item">
                <div className="stat-num">1<span>+</span></div>
                <div className="stat-label">Year Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">150<span>%</span></div>
                <div className="stat-label">Organic Growth</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">4.2<span>x</span></div>
                <div className="stat-label">Average ROAS</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 text-center">
            <div className="profile-img-wrapper mx-auto">
              <img 
                src={`${process.env.PUBLIC_URL}/image/profile_image.jpeg`} 
                alt="Jayasri N" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
