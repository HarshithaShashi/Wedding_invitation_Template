import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to Our Wedding</h1>
        <p>Join us in celebrating our love story</p>
        <a href="#about" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;
