'use client'
import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css'; // Import custom CSS for animations

export default function HeroSection() {
  const sectionRef = useRef(null); // Create a ref for the section
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when in view
          observer.unobserve(sectionRef.current); // Stop observing once it’s visible
        }
      },
      { threshold: 0.2 } // Adjust threshold as per your need
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
    <section ref={sectionRef} className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className={`w-full md:w-1/2 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <img
            src="/images/polishcar.jpg" // Replace with your actual image path
            alt="Polishing car"
            className="rounded-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className={`w-full md:w-1/2 mt-8 md:mt-0 md:ml-16 ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
          <h1 className="text-3xl lg:text-6xl font-semibold mb-4">We enhance your vehicles’ beauty</h1>
          <p className="text-gray-300 mb-8 text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-6 rounded-lg transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
