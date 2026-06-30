import React from 'react';
import { FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Digital Marketing Teaching Reel',
      badge: 'Educational Showcase',
      description: 'An educational walkthrough showcase highlighting search marketing strategies, local brand SEO setups, and client ad campaigns.',
      videoUrl: `${process.env.PUBLIC_URL}/video/digitalmarketingclass teach.mp4`,
      tags: ['SEO & SEM', 'Teaching', 'Marketing Strategy'],
      link1: '#gallery',
      link1Text: 'View Showcase',
      link2: '#contact',
      link2Text: 'Enquire Now',
    },
    {
      id: 2,
      title: 'Motorcycle Rental Promo Ad',
      badge: 'Video Campaign',
      description: 'A high-impact promotional video advertisement designed to boost bike rental bookings and local brand awareness in Chennai.',
      videoUrl: `${process.env.PUBLIC_URL}/video/rental bike add.mp4`,
      tags: ['SMM Video', 'Brand Promotion', 'Local Marketing'],
      link1: '#gallery',
      link1Text: 'View Metrics',
      link2: '#contact',
      link2Text: 'Enquire Now',
    },
    {
      id: 3,
      title: 'Bike Rental Service Ad',
      badge: 'Campaign Video',
      description: 'A promotional video campaign showcasing rental motorcycle fleet options, travel experiences, and booking details.',
      videoUrl: `${process.env.PUBLIC_URL}/video/sfa bike ad.mp4`,
      tags: ['Fleet Promo', 'Travel Campaign', 'Instagram Reels'],
      link1: '#gallery',
      link1Text: 'View Case Study',
      link2: '#contact',
      link2Text: 'Enquire Now',
    },
    {
      id: 4,
      title: 'Homemade Breakfast Promo',
      badge: 'Social Campaign',
      description: 'A vibrant social media video advertisement designed to showcase fresh, homemade breakfast and lunch menu options to drive local subscriptions.',
      videoUrl: `${process.env.PUBLIC_URL}/video/breakfast video ad.mp4`,
      tags: ['Food Marketing', 'Promo Ad', 'Local Business'],
      link1: '#gallery',
      link1Text: 'View Campaign',
      link2: '#contact',
      link2Text: 'Enquire Now',
    },
    {
      id: 5,
      title: 'Creative Video Editing Showreel',
      badge: 'Video Editing',
      description: 'A dynamic showcase of creative video editing techniques, visual transitions, and pacing designed for social media campaigns.',
      videoUrl: `${process.env.PUBLIC_URL}/video/video editing.mp4`,
      tags: ['Video Editing', 'CapCut', 'Creative Production'],
      link1: '#gallery',
      link1Text: 'View Showcase',
      link2: '#contact',
      link2Text: 'Enquire Now',
    },
    {
      id: 6,
      title: 'Voice Over Campaign Showcase',
      badge: 'Voice Over',
      description: 'A professional voice over production demonstrating clear articulation, expression, and engagement for digital ads.',
      videoUrl: `${process.env.PUBLIC_URL}/video/voice over.mp4`,
      tags: ['Voice Over', 'Audio Production', 'Digital Ads'],
      link1: '#gallery',
      link1Text: 'View Showcase',
      link2: '#contact',
      link2Text: 'Enquire Now',
    },
  ];

  const handleVideoPlay = (e) => {
    const activeVideo = e.target;
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(video => {
      if (video !== activeVideo) {
        video.pause();
      }
    });
  };

  return (
    <section id="projects" className="project-section">
      <div className="container">
        <h2 className="section-title reveal">
          Video <span className="text-span">Campaigns</span>
        </h2>
        <div className="row justify-content-center g-4">
          {projects.map((project, idx) => (
            <div key={project.id} className={`col-lg-4 col-md-6 d-flex justify-content-center reveal reveal-d${idx + 1}`}>
              <div className="project-card" style={{ maxWidth: '320px', width: '100%' }}>
                {project.badge && <span className="project-badge">{project.badge}</span>}
                <div className="project-video-wrap" style={{ position: 'relative', aspectRatio: '9/16', background: '#000', borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
                  <video 
                    src={project.videoUrl} 
                    controls 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }}
                    onPlay={handleVideoPlay}
                  />
                </div>
                <div className="project-body">
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link1} className="btn-project btn-project-ghost">
                      <FaFileAlt /> {project.link1Text}
                    </a>
                    {project.link2 && (
                      <a href={project.link2} className="btn-project btn-project-primary">
                        <FaExternalLinkAlt /> {project.link2Text}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
