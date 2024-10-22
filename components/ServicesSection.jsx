'use client'
import { useEffect, useState, useRef } from 'react';

export default function ServicesSection() {
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);
  const sectionRef = useRef(null); // Reference to the Services Section
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect(); // Optional: Stop observing after it's in view
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
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

  // Trigger animation with delay when the section is visible
  useEffect(() => {
    if (isSectionVisible) {
      const timeouts = [];
      
      cardsVisible.forEach((_, index) => {
        timeouts.push(
          setTimeout(() => {
            setCardsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true;
              return newVisibility;
            });
          }, index * 300) // 300ms delay between each card
        );
      });

      // Cleanup timeouts on unmount
      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
      };
    }
  }, [isSectionVisible]);

  return (
    <section ref={sectionRef} className="bg-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-start space-y-4 lg:flex-row justify-between lg:items-center mb-8">
          <h2 className="text-white text-3xl lg:text-6xl font-semibold">Our services</h2>
          <p className="text-gray-300 mt-2 max-w-md lg:text-lg">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="text-white flex items-center space-x-2 hover:underline">
            <span>View All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12L8.25 19.5" />
            </svg>
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className={`relative group bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-700 ease-in-out ${
              cardsVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <img
              src="/images/car repair.jpg"
              alt="Repairs"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-bold">01.</div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-2xl font-bold">Repairs</h3>
              <p className="text-gray-400 mt-1">Adipiscing elit sed</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`relative group bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-700 ease-in-out ${
              cardsVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <img
              src="/images/detailing.jpg"
              alt="Detailing"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-bold">02.</div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-2xl font-bold">Detailing</h3>
              <p className="text-gray-400 mt-1">Adipiscing elit sed</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`relative group bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-700 ease-in-out ${
              cardsVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <img
              src="/images/polishing.jpg"
              alt="Polishing"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 text-white text-xl font-bold">03.</div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-2xl font-bold">Polishing</h3>
              <p className="text-gray-400 mt-1">Adipiscing elit sed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
