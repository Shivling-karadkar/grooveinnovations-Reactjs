"use client";
import * as React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero slide-up" role="banner" aria-label="Hero section">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/fe403b28bcd4b3b0d2499af77834659ef65437ab?placeholderIfAbsent=true"
        alt="Team of engineers working on innovative technology solutions"
        className="hero-background"
        loading="eager"
      />
      <div className="hero-content">
        <div className="hero-badge" role="banner" aria-label="Company specialization">
          <div>Proficient Engineers</div>
        </div>
        <h1 className="hero-title">
          Elite Team of Expert Engineers
          <br />
          and Innovators
        </h1>
        <div className="hero-actions" role="group" aria-label="Call to action buttons">
          <button
            className="primary-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Contact us to discuss your project"
          >
            <span>REACH OUT</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bdb98d2dda5f22a134c4dfdf4b6d5fad2c13f35b?placeholderIfAbsent=true"
              alt=""
              className="button-icon"
              aria-hidden="true"
            />
          </button>
          <button
            className="secondary-button"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Learn more about our services and expertise"
          >
            <span>READ MORE</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/95df52ebf7c1744e1ad789d8623c4e691b6618e9?placeholderIfAbsent=true"
              alt=""
              className="button-icon"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
