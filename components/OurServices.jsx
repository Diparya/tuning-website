'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OurServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  // Function to apply delay
  const getStyleWithDelay = (index) => {
    return {
      transitionDelay: `${index * 200}ms`,
    };
  };

  return (
    <div className="bg-white">

      {/* Banner Section */}
      <section className="bg-blue-100 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-6xl font-semibold text-gray-800">Our Services</h1>
          <p className="text-sm text-gray-500 mt-3">Home / Our Services</p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={sectionRef} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div
              style={getStyleWithDelay(0)}
              className={`relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src="images/car-wash.jpg"
                  alt="Car Wash"
                  className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  width={300}
                  height={200}
                />
              </div>
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-4 text-lg font-bold">04.</div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold">Car Wash</h3>
                <p className="text-gray-500">Adipiscing elit sed</p>
              </div>
            </div>

            {/* Service 2 */}
            <div
              style={getStyleWithDelay(1)}
              className={`relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src="images/restoration.jpg"
                  alt="Restoration"
                  className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  width={300}
                  height={200}
                />
              </div>
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-4 text-lg font-bold">05.</div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold">Restoration</h3>
                <p className="text-gray-500">Adipiscing elit sed</p>
              </div>
            </div>

            {/* Service 3 */}
            <div
              style={getStyleWithDelay(2)}
              className={`relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src="images/painting.jpg"
                  alt="Painting"
                  className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  width={300}
                  height={200}
                />
              </div>
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-4 text-lg font-bold">06.</div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold">Painting</h3>
                <p className="text-gray-500">Adipiscing elit sed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
