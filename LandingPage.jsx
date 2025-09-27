"use client";
import * as React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
