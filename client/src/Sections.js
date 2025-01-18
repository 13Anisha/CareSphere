import React from 'react';

const SectionCard = ({ title, description }) => {
  return (
    <div className="section-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Sections = () => {
  return (
    <div className="sections">
      <SectionCard title="Cardiology" description="Expert care for your heart and blood." />
      <SectionCard title="Pediatrics" description="Specialized care for children and newborns." />
      <SectionCard title="Gynecology" description="Comprehensive women's health services." />
    </div>
  );
};

export default Sections;
