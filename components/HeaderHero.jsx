'use client'
import { useState, useEffect } from 'react';

// Image and text data
const heroSlides = [
  {
    backgroundImage: 'images/car_wash.jpg',
    heading: 'Transform your ride',
    subheading: 'PRECISION AT EVERY TURN',
  },
  {
    backgroundImage: 'images/car_interior.jpg',
    heading: 'A touch of elegance',
    subheading: 'EXPERIENCE LUXURY',
  },
  {
    backgroundImage: 'images/car_polish.jpg',
    heading: 'Shine Like Never Before',
    subheading: 'BRILLIANCE IN EVERY STROKE',
  },
];

export default function HeaderHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textAnimation, setTextAnimation] = useState(false);
  const [imageZoom, setImageZoom] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  // Effect to trigger animations
  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setTextAnimation(true);
    }, 500); // Delay for text animation

    const imageTimeout = setTimeout(() => {
      setImageZoom(true);
    }, 2000); // Start zoom after text animation (2s)

    const slideOutTimeout = setTimeout(() => {
      setTextAnimation(false); // Make text disappear
      setSlideOut(true); // Slide the image to the right
    }, 8000); // Start slide out animation after 8 seconds

    const slideChangeTimeout = setTimeout(() => {
      setSlideOut(false); // Reset slide-out state
      setImageZoom(false); // Reset zoom
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length); // Switch to the next slide
    }, 10000); // Change slide after 10 seconds

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(imageTimeout);
      clearTimeout(slideOutTimeout);
      clearTimeout(slideChangeTimeout);
    };
  }, [currentSlide]);

  const currentHero = heroSlides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        {/* Animated Text */}
        <p
          className={`text-white mb-5 text-sm lg:text-lg transition-all duration-1000 transform ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          {currentHero.subheading}
        </p>

        <h1
          className={`text-2xl lg:text-6xl font-semibold text-white transition-all duration-1000 transform ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          {currentHero.heading}
        </h1>

        <button
          className={`mt-10 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-1000 transform ${
            textAnimation ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          Get Started Now
        </button>
      </div>

      {/* Background image with smooth zoom and slide-out */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-2000 ease-out ${
          imageZoom ? 'scale-110' : 'scale-100'
        } ${slideOut ? 'translate-x-full' : 'translate-x-0'}`}
        style={{ backgroundImage: `url(${currentHero.backgroundImage})` }}
      ></div>

      {/* Right-side Icons */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-4 pr-6 z-10">
      <button className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

          </button>
          <button className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

          </button>
          <button className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>

          </button>
      </div>
    </div>
  );
}
