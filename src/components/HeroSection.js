import React from "react";
// Open HeroSection.js and remove this line if it exists:



function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <h1 className="hero-heading">Revolutionize Your Sales & Customer Support with AI</h1>
        <p className="hero-paragraph">
          Enhance engagement, improve response times, and save millions by
          automating your support and sales operations.
        </p>
        <div className="hero-buttons">
          <button className="hero-button-primary">Get Started with Yuga AI</button>
          <button className="hero-button-secondary">Request a Demo</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/one.jpg" alt="Description of the image" />
      </div>
    </section>
  );
}

export default HeroSection;
