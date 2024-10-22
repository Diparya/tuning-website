'use client'
import React, { useEffect, useState, useRef } from 'react';

export default function RecentNews() {
  // State to track visibility of the component
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // When component is in view
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
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

  // Example array of news articles
  const articles = [
    {
      id: 1,
      title: 'The top 10 benefits of regular car detailing',
      image: 'images/news01.jpg',
      date: 'Jul 10, 2024',
      comments: '0 Comments',
    },
    {
      id: 2,
      title: 'The ultimate guide to car detailing products',
      image: 'images/news2.jpg',
      date: 'Jul 9, 2024',
      comments: '0 Comments',
    },
    {
      id: 3,
      title: 'Protective luxury car detailing: interior vs. exterior',
      image: 'images/news3.jpg',
      date: 'Jul 8, 2024',
      comments: '0 Comments',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-12"
    >
      {/* Title and description */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl lg:text-6xl font-semibold mb-6">Recent news</h2>
        <p className="text-sm lg:text-lg mb-10 text-gray-400">
          Curabitur tellus leo, euismod sit amet gravida at, egestas et commodo.
        </p>
      </div>

      {/* News Articles */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }} // Delay for a staggered effect
            >
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105" // Faster zoom effect on hover
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-400">
                  {article.date} &bull; {article.comments}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
