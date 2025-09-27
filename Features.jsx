"use client";
import * as React from "react";
import "./Features.css";

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "High Performance",
      description: "Optimized solutions that deliver exceptional speed and efficiency for your business needs.",
      ariaLabel: "Lightning bolt icon representing high performance"
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures ensuring your data is protected and systems are reliable.",
      ariaLabel: "Lock icon representing security and reliability"
    },
    {
      icon: "🚀",
      title: "Scalable Solutions",
      description: "Future-proof architecture that grows with your business and adapts to changing requirements.",
      ariaLabel: "Rocket icon representing scalable solutions"
    },
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Meticulous attention to detail ensuring every component meets the highest standards.",
      ariaLabel: "Target icon representing precision engineering"
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Worldwide deployment capabilities with 24/7 support across multiple time zones.",
      ariaLabel: "Globe icon representing global reach"
    },
    {
      icon: "💡",
      title: "Innovation Driven",
      description: "Cutting-edge technologies and methodologies to keep you ahead of the competition.",
      ariaLabel: "Light bulb icon representing innovation"
    }
  ];

  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="features-container">
        <header className="features-header slide-up">
          <h2 id="features-title" className="features-title">Our Expertise</h2>
          <p className="features-subtitle">
            Delivering cutting-edge solutions with precision and innovation
          </p>
        </header>

        <div className="features-grid" role="grid" aria-label="Our expertise and capabilities">
          {features.map((feature, index) => (
            <article
              key={index}
              className="feature-card fade-in"
              role="gridcell"
              tabIndex="0"
              aria-labelledby={`feature-title-${index}`}
              aria-describedby={`feature-desc-${index}`}
            >
              <div className="feature-icon" aria-label={feature.ariaLabel}>
                <div className="icon-placeholder" aria-hidden="true">{feature.icon}</div>
              </div>
              <h3 id={`feature-title-${index}`} className="feature-title">{feature.title}</h3>
              <p id={`feature-desc-${index}`} className="feature-description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
