'use client';
import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [projects, setProjects] = useState(0);
  const [people, setPeople] = useState(0);
  const [years, setYears] = useState(0);
  const [offices, setOffices] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef(null);

  // Function to increment the numbers
  const incrementNumber = (target, setter, incrementSpeed) => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(target / 100); // Adjust the increment rate
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setter(start);
    }, incrementSpeed);
  };

  // IntersectionObserver to trigger animation when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjust threshold for when animation should start
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

  useEffect(() => {
    if (isVisible) {
      // Start incrementing the numbers only when the component is in view
      incrementNumber(98, setProjects, 50); // Projects target, setter, and increment speed in milliseconds
      incrementNumber(65, setPeople, 50); // People target, setter, and increment speed
      incrementNumber(10, setYears, 100); // Years target, setter, and increment speed
      incrementNumber(15, setOffices, 100); // Offices target, setter, and increment speed
    }
  }, [isVisible]);

  return (
    <section className="bg-white py-12" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center">
          {/* Stat Block 1 */}
          <div className="text-center">
            <h2 className="text-8xl font-extrabold text-gray-900">{projects}</h2>
            <p className="text-xl font-medium text-gray-600">Projects</p>
          </div>

          {/* Separator */}
          <div className="h-16 border-l border-gray-300"></div>

          {/* Stat Block 2 */}
          <div className="text-center">
            <h2 className="text-8xl font-extrabold text-gray-900">{people}</h2>
            <p className="text-xl font-medium text-gray-600">People</p>
          </div>

          {/* Separator */}
          <div className="h-16 border-l border-gray-300"></div>

          {/* Stat Block 3 */}
          <div className="text-center">
            <h2 className="text-8xl font-extrabold text-gray-900">{years}</h2>
            <p className="text-xl font-medium text-gray-600">Years</p>
          </div>

          {/* Separator */}
          <div className="h-16 border-l border-gray-300"></div>

          {/* Stat Block 4 */}
          <div className="text-center">
            <h2 className="text-8xl font-extrabold text-gray-900">{offices}</h2>
            <p className="text-xl font-medium text-gray-600">Offices</p>
          </div>
        </div>
      </div>
    </section>
  );
}
