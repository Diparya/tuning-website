'use client';
import React, { useState, useEffect, useRef } from "react";
import "./AutomotiveGallery.css"; // Make sure this file has styles related to 3D effects

const images = [
  {
    src: "/images/car-orange.jpg",
    title: "Car Orange",
  },
  {
    src: "/images/car-blue.jpg",
    title: "Exterior Detailing",
  },
  {
    src: "/images/car-interior.jpg",
    title: "Car Interior",
  },
];

export default function AutomotiveGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const get3DClass = (index) => {
    if (index === currentIndex) {
      return "center-image";
    } else if (
      index === (currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    ) {
      return "left-image";
    } else if (
      index === (currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    ) {
      return "right-image";
    } else {
      return "hidden-image"; // Hide the rest of the images
    }
  };

  return (
    <section className="bg-black text-white py-16 px-8" ref={galleryRef}>
      <div>
        {/* Scrolling Title */}
        <div className="scroll-wrapper">
          <h1 className="text-[45vh] font-bold mb-12 scroll-text">
            New Automotive&nbsp;&nbsp;&nbsp;&nbsp;New Automotive&nbsp;&nbsp;&nbsp;&nbsp;New Automotive&nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </div>

        {/* Image Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 p-3 bg-gray-800 hover:bg-gray-700 rounded-full"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Image and Title */}
          <div className="flex justify-center items-center space-x-8 w-full md:w-2/3">
            {images.map((image, index) => (
              <div
                key={index}
                className={`image-container ${get3DClass(index)}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  width={70}
                  height={900}
                  className="rounded-lg object-cover"
                />
                {index === currentIndex && (
                  <p className="mt-4 text-lg text-center">{image.title}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 p-3 bg-gray-800 hover:bg-gray-700 rounded-full"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5 15.75 12l-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
