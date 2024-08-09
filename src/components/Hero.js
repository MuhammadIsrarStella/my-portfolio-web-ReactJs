import React from 'react';
import '../assets/styles/Hero.css'; // Adjust the path

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Muhammad Israr</h1>
        <h2>Software Engineer</h2>
        <p>Building impactful software in healthcare and e-commerce.</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>
    </section>
  );
}

export default Hero;
