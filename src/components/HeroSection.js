import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-dog.mp4' autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>Best Dog Care</p>

    </div>
  );
}

export default HeroSection;