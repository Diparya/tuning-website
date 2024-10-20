export default function CollisionRepair() {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative group">
              <img
                src="images/car-before.jpg"
                alt="Car before repair"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex justify-center items-center">
                <span className="text-white text-2xl">+</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="images/car-after.jpg"
                alt="Car after repair"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex justify-center items-center">
                <span className="text-white text-2xl">+</span>
              </div>
            </div>
          </div>
  
          {/* Text Section */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-6xl font-semibold mb-4 text-black">
              We make collision damage disappear
            </h2>
            <p className="text-gray-500 mb-6 lg:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <button
              className=" bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    );
  }
  