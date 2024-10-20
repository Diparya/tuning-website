// components/AutoDetailerSection.js

export default function AutoDetailerSection() {
    return (
      <section className="bg-black text-white">
        {/* Brand Logos Section */}
        <div className="bg-blue-600 py-24">
          <div className="max-w-7xl mx-auto flex justify-around items-center space-x-4">
            <img src="/images/ngk.webp" alt="NGK Logo" className="h-12"/>
            <img src="/images/toyota.webp" alt="Toyota Logo" className="h-12"/>
            <img src="/images/fiat.webp" alt="Fiat Logo" className="h-12"/>
            <img src="/images/r-logo.webp" alt="R Logo" className="h-12"/>
            <img src="/images/jeep.webp" alt="Jeep Logo" className="h-12"/>
            <img src="/images/mg.webp" alt="MG Logo" className="h-12"/>
          </div>
        </div>
  
        {/* Who We Are Section */}
        <div className="py-24 px-8 lg:mx-36 text-center">
          <h2 className="uppercase tracking-widest text-sm font-semibold text-gray-300 mb-4">
            Who We Are
          </h2>
          <h1 className="text-xl lg:text-5xl md:text-6xl font-semibold leading-snug mb-6">
            Expert auto detailers dedicated to excellence, innovation, 
            and quality service for <span className="text-blue-500">every car, everywhere</span>
          </h1>
          <p className="text-white text-lg">Peter Bowman</p>
          <p className="text-gray-500">Service Manager</p>
        </div>
  
        {/* Testimonials Section */}
        <div className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-xl text-white mb-4">
              &quot;Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste.&quot;
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="/images/testimonial-steve.jpg" // Replace with actual image path
                  alt="Steve Carter"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <p className="font-semibold">Steve Carter</p>
                  <p className="text-sm text-gray-500">Memphis, TN</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg text-white mb-4">
              &quot;Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste.&quot;
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="/images/testimonial-jason.jpg" // Replace with actual image path
                  alt="Jason Lewis"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <p className="font-semibold">Jason Lewis</p>
                  <p className="text-sm text-gray-500">Detroit, MI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  