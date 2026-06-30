import React, { useState, useEffect } from 'react';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';

const CampaignGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const galleryItems = [
    {
      id: 3,
      category: 'videos',
      title: 'Bike Rental Promo Ad',
      description: 'Short promotional video ad for local motorcycle rentals in Chennai.',
      img: `${process.env.PUBLIC_URL}/assets/images/bike_ad_poster.png`,
      embedUrl: 'https://www.youtube.com/embed/c_IFSf9-Wb0?autoplay=1',
      type: 'embed',
    },
    {
      id: 6,
      category: 'videos',
      title: 'Bike Rental Experience Reel',
      description: 'Instagram Reel highlighting user booking convenience and fleet experience.',
      img: `${process.env.PUBLIC_URL}/assets/images/marketing_video_thumbnail.png`,
      embedUrl: 'https://www.instagram.com/reel/DV8lI3pE7ez/embed/',
      type: 'embed',
    },
    {
      id: 7,
      category: 'videos',
      title: 'Fleet Showcase Reel',
      description: 'Instagram Reel showing a walkthrough of premium motorcycle models.',
      img: `${process.env.PUBLIC_URL}/assets/images/marketing_video_thumbnail.png`,
      embedUrl: 'https://www.instagram.com/reel/DXMCdyAEwtT/embed/',
      type: 'embed',
    },
    {
      id: 8,
      category: 'videos',
      title: 'Customer Review Reel',
      description: 'Instagram Reel highlighting customer testimonials and rental bike feedback.',
      img: `${process.env.PUBLIC_URL}/assets/images/marketing_video_thumbnail.png`,
      embedUrl: 'https://www.instagram.com/reel/DRzfr9WjETB/embed/',
      type: 'embed',
    },
    {
      id: 9,
      category: 'videos',
      title: 'Brand Promotional Reel',
      description: 'Instagram Reel campaign designed to boost organic social reach and brand visibility.',
      img: `${process.env.PUBLIC_URL}/assets/images/marketing_video_thumbnail.png`,
      embedUrl: 'https://www.instagram.com/reel/DSrACufkjAm/embed/',
      type: 'embed',
    },
    {
      id: 14,
      category: 'videos',
      title: 'Customer Experience Reel',
      description: 'Instagram Reel highlighting client travel feedback and fleet rides.',
      img: `${process.env.PUBLIC_URL}/assets/images/marketing_video_thumbnail.png`,
      embedUrl: 'https://www.instagram.com/reel/DRbxn_fCJ5m/embed/',
      type: 'embed',
    },
    {
      id: 10,
      category: 'graphics',
      title: 'Normal Makeup Campaign',
      description: 'Social media creative designed for everyday natural makeup services.',
      img: `${process.env.PUBLIC_URL}/showcaseimages/WhatsApp Image 2026-06-29 at 2.24.06 PM.jpeg`,
      type: 'image',
    },
    {
      id: 11,
      category: 'graphics',
      title: 'Waterproof Bridal Makeover',
      description: 'Promotional ad banner showcasing smudge-free bridal makeover packages.',
      img: `${process.env.PUBLIC_URL}/showcaseimages/WhatsApp Image 2026-06-29 at 2.24.06 PM (1).jpeg`,
      type: 'image',
    },
    {
      id: 12,
      category: 'graphics',
      title: 'Lice & Nits Treatment Ad',
      description: 'Engagement-driving informative graphic for chemical-free hair care services.',
      img: `${process.env.PUBLIC_URL}/showcaseimages/WhatsApp Image 2026-06-29 at 2.24.07 PM.jpeg`,
      type: 'image',
    },
    {
      id: 13,
      category: 'graphics',
      title: 'V-Cut Hair Styling Promo',
      description: 'Conversion-focused promotional graphic highlighting expert V-cut hair styling.',
      img: `${process.env.PUBLIC_URL}/showcaseimages/WhatsApp Image 2026-06-29 at 2.24.07 PM (1).jpeg`,
      type: 'image',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = document.querySelectorAll('.gallery-grid .reveal');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter, filteredItems]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title reveal">
          Campaign <span className="text-span">Gallery</span>
        </h2>
        
        {/* Filters */}
        <div className="gallery-filters reveal">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'graphics' ? 'active' : ''}`}
            onClick={() => setActiveFilter('graphics')}
          >
            Ad Creatives
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('videos')}
          >
            Video Ads
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4 gallery-grid mt-2">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 reveal">
              <div className="gallery-card">
                <div className="gallery-img-wrap" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  {item.type === 'embed' ? (
                    <iframe 
                      src={item.embedUrl} 
                      className="w-100 h-100" 
                      frameBorder="0" 
                      scrolling="no" 
                      allowFullScreen 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={item.title}
                    />
                  ) : (
                    <div onClick={() => setLightboxItem(item)} style={{ cursor: 'pointer', height: '100%', width: '100%' }}>
                      <img src={item.img} alt={item.title} />
                      <div className="gallery-overlay">
                        <span className="gallery-zoom-icon">
                          <FaSearchPlus />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="gallery-body">
                  <span className={`badge-category badge-${item.category}`}>{item.category.toUpperCase().replace('&', ' & ')}</span>
                  <h5 className="gallery-title">{item.title}</h5>
                  <p className="gallery-desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="gallery-lightbox" onClick={() => setLightboxItem(null)}>
          <div className={`lightbox-content ${lightboxItem.type === 'video' || lightboxItem.type === 'embed' ? 'video-mode' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxItem(null)}>
              <FaTimes />
            </button>
            <div className="lightbox-body">
              {lightboxItem.type === 'video' && (
                <div className="lightbox-video-container">
                  <video src={lightboxItem.videoUrl} controls autoPlay className="w-100 h-100" />
                </div>
              )}
              {lightboxItem.type === 'embed' && (
                <div className="lightbox-video-container">
                  <iframe 
                    src={lightboxItem.embedUrl} 
                    className="w-100 h-100" 
                    frameBorder="0" 
                    scrolling="no" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={lightboxItem.title}
                  />
                </div>
              )}
              {lightboxItem.type === 'image' && (
                <img src={lightboxItem.img} alt={lightboxItem.title} className="lightbox-img" />
              )}
              <div className="lightbox-details">
                <h3>{lightboxItem.title}</h3>
                <p>{lightboxItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CampaignGallery;
