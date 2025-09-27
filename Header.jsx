"use client";
import * as React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div className="header-content">
          <div className="logo" aria-label="Company logo" tabIndex="0">
            G
          </div>
          <nav className="navigation" role="navigation" aria-label="Main navigation">
            <div className="nav-primary">
              <a href="#industries" className="nav-item" role="menuitem">Industries</a>
              <a href="#platform" className="nav-item" role="menuitem">Platform</a>
              <a href="#insights" className="nav-item" role="menuitem">Insights</a>
            </div>
            <div className="nav-secondary">
              <a href="#services" className="nav-item" role="menuitem">Services</a>
              <a href="#pricing" className="nav-item" role="menuitem">Pricing</a>
              <a href="#about" className="nav-item" role="menuitem">About Us</a>
              <a href="#blog" className="nav-item" role="menuitem">Blog</a>
            </div>
            <button className="cta-button" aria-label="Contact us - Let's talk about your project">
              <span>Let's Talk</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/00728fe157910f0026fde88469aea35fc43271dd?placeholderIfAbsent=true"
                alt="Arrow icon"
                className="button-icon"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
