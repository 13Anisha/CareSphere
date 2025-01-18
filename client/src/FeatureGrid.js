import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const FeatureGrid = () => {
  return (
    <div className="feature-grid">
      <FeatureCard title="Appointment tracking" description="Easily schedule and monitor your medical appointments." />
      <FeatureCard title="Lab report access" description="Quick retrieval of your lab results at any time." />
      <FeatureCard title="Profile management" description="Personalize your health profile for tailored experiences." />
      <FeatureCard title="Hospital locator" description="Find nearby hospitals and healthcare facilities effortlessly." />
      <FeatureCard title="Health data storage" description="Secure storage of your health information for easy access." />
      <FeatureCard title="User login" description="Safe and convenient access to your health data." />
    </div>
  );
};

export default FeatureGrid;
