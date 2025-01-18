import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="wavy-background"></div>
      <h2>CareSphere </h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">Doctor</a>
        <a href="#">Nearest Hospital</a>
        <a href="#">Previous Records</a>
      </nav>
    </header>
  );
};

export default Header;
