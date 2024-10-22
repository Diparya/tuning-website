'use client'
import React, { useState, useEffect, useRef } from "react";
import "./AutoDetailerSection.css"; // Import the CSS file for animations

export default function AutoDetailerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-black text-white" ref={sectionRef}>
      {/* Brand Logos Section */}
      <div className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto flex justify-around items-center space-x-4">
          <img
            src="/images/ngk.webp"
            alt="NGK Logo"
            className={`h-12 ${isVisible ? "animate-logo visible-logo" : "hidden-logo"}` }
          />
          <img
            src="/images/toyota.webp"
            alt="Toyota Logo"
            className={`h-12 ${isVisible ? "animate-logo delay-100 visible-logo" : "hidden-logo"}`}
          />
          <img
            src="/images/fiat.webp"
            alt="Fiat Logo"
            className={`h-12 ${isVisible ? "animate-logo delay-200 visible-logo" : "hidden-logo"}`}
          />
          <img
            src="/images/r-logo.webp"
            alt="R Logo"
            className={`h-12 ${isVisible ? "animate-logo delay-300 visible-logo" : "hidden-logo"}`}
          />
          <img
            src="/images/jeep.webp"
            alt="Jeep Logo"
            className={`h-12 ${isVisible ? "animate-logo delay-400 visible-logo" : "hidden-logo"}`}
          />
          <img
            src="/images/mg.webp"
            alt="MG Logo"
            className={`h-12 ${isVisible ? "animate-logo delay-500 visible-logo" : "hidden-logo"}`}
          />
        </div>
      </div>

      
    </section>
  );
}
