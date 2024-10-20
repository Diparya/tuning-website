export default function AutomotiveGallery() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-6xl font-bold mb-12">
          New Automotive Beauty
        </h1>

        {/* Image Carousel */}
        <div className="relative">
          <div className="flex space-x-4 overflow-x-scroll hide-scroll-bar">
            {/* First image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="/images/car-orange.jpg" // Replace with your actual image path
                alt="Car orange"
                className="rounded-lg object-cover"
              />
            </div>
            {/* Second image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="/images/car-blue.jpg" // Replace with your actual image path
                alt="Car blue"
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-center">Exterior detailing</p>
            </div>
            {/* Third image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="/images/car-interior.jpg" // Replace with your actual image path
                alt="Car interior"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
