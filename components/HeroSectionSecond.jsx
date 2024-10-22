'use client'
import React, { useEffect, useRef, useState } from 'react';

const HeroSectionSecond = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // When the section is in view
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is in view
      }
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
    <section
      ref={sectionRef}
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-background.jpg')",
      }}
    >
      {/* Overlay for darker shade */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Section */}
      <div
        className={`relative z-10 flex flex-col items-start justify-center h-full text-center text-white px-4 ml-14
          transition-opacity duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Text Section */}
        <div className="text-3xl md:text-5xl font-bold leading-tight flex flex-col items-start">
          <p>Expert detailing that</p>
          <p>restores and protects</p>
        </div>

        {/* CTA Button */}
        <a
          href="#about-us"
          className="mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg"
        >
          About Us
        </a>
      </div>
    </section>
  );
};

export default HeroSectionSecond;
