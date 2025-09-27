"use client";
import * as React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand slide-in-left">
              <div className="footer-logo" aria-label="Company logo" tabIndex="0">G</div>
              <p className="footer-description">
                Elite team of expert engineers and innovators delivering
                cutting-edge solutions for your business needs.
              </p>
            </div>

            <nav className="footer-links slide-in-right" aria-label="Footer navigation">
              <div className="footer-column">
                <h3 className="footer-heading">Services</h3>
                <ul className="footer-list" role="list">
                  <li role="listitem"><a href="#services" className="footer-link" aria-label="Learn about web development services">Web Development</a></li>
                  <li role="listitem"><a href="#services" className="footer-link" aria-label="Learn about mobile app development">Mobile Apps</a></li>
                  <li role="listitem"><a href="#services" className="footer-link" aria-label="Learn about cloud solutions">Cloud Solutions</a></li>
                  <li role="listitem"><a href="#services" className="footer-link" aria-label="Learn about consulting services">Consulting</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Industries</h3>
                <ul className="footer-list" role="list">
                  <li role="listitem"><a href="#industries" className="footer-link" aria-label="Healthcare industry solutions">Healthcare</a></li>
                  <li role="listitem"><a href="#industries" className="footer-link" aria-label="Finance industry solutions">Finance</a></li>
                  <li role="listitem"><a href="#industries" className="footer-link" aria-label="E-commerce industry solutions">E-commerce</a></li>
                  <li role="listitem"><a href="#industries" className="footer-link" aria-label="Education industry solutions">Education</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Company</h3>
                <ul className="footer-list" role="list">
                  <li role="listitem"><a href="#about" className="footer-link" aria-label="Learn about our company">About Us</a></li>
                  <li role="listitem"><a href="#careers" className="footer-link" aria-label="View career opportunities">Careers</a></li>
                  <li role="listitem"><a href="#blog" className="footer-link" aria-label="Read our blog posts">Blog</a></li>
                  <li role="listitem"><a href="#contact" className="footer-link" aria-label="Contact us">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Contact Information</h3>
                <address className="contact-info">
                  <p className="contact-item">
                    <span className="contact-label">Email:</span>
                    <a href="mailto:hello@company.com" className="footer-link" aria-label="Send email to hello@company.com">hello@company.com</a>
                  </p>
                  <p className="contact-item">
                    <span className="contact-label">Phone:</span>
                    <a href="tel:+1234567890" className="footer-link" aria-label="Call us at +1 (234) 567-890">+1 (234) 567-890</a>
                  </p>
                </address>
              </div>
            </nav>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright" role="text">
                © 2024 Company Name. All rights reserved.
              </p>
              <nav className="footer-bottom-links" aria-label="Legal links">
                <a href="#privacy" className="footer-bottom-link" aria-label="Read our privacy policy">Privacy Policy</a>
                <a href="#terms" className="footer-bottom-link" aria-label="Read our terms of service">Terms of Service</a>
                <a href="#cookies" className="footer-bottom-link" aria-label="Read our cookie policy">Cookie Policy</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
