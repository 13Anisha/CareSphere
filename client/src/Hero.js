import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="wavy-background"></div>
      <div className="hero-text">
        <h1>Providing Community Access to Quality Healthcare</h1>
        <p>The quality of our service and the professionalism of our staff are the reason for our success.</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#1E90FF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Get Started
        </button>
      </div>
      <img src="male-doctor-smiling-happy-face-600nw-2481032615.webp" alt="Doctor" />
    </div>
  );
};

export default Hero;
