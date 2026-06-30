import React from 'react';
import { FaTrophy, FaUsers, FaFootballBall } from 'react-icons/fa';

const ExtraCurricularSection = () => {
  const activities = [
    { title: 'Football', subtitle: 'South Zone Level Player', icon: <FaFootballBall /> },
    { title: 'Cricket', subtitle: 'Inter College Level Competitor', icon: <i className="fas fa-baseball-ball"></i> },
    { title: 'Athletics', subtitle: 'Inter College Level Athlete', icon: <FaTrophy /> },
    { title: 'Kabaddi', subtitle: 'Inter College Level Competitor', icon: <FaUsers /> },
  ];

  return (
    <section id="activities" className="activities-section" style={{ background: 'var(--bg-3)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="section-title reveal">
          Extra-Curricular <span className="text-span">Activities</span>
        </h2>
        <div className="row justify-content-center g-4 mt-2">
          {activities.map((activity, index) => (
            <div key={index} className="col-6 col-md-3 reveal">
              <div className="activity-card text-center p-4">
                <div className="activity-icon mx-auto mb-3">
                  {activity.icon}
                </div>
                <h5 className="activity-card-title">{activity.title}</h5>
                <p className="activity-card-subtitle">{activity.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;
