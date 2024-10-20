import React from 'react'

const HeroSectionSecond = () => {
    return (
        <section
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
          }}
        >
          {/* Overlay for darker shade */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Content Section */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full text-center text-white px-4 ml-14">
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
}

export default HeroSectionSecond