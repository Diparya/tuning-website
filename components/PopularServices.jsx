export default function PopularServices() {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-6xl font-semibold text-gray-800">Our popular services</h2>
            <p className="mt-4 text-gray-500">
              Curabitur tellus leo, euismod sit amet gravida at, egestas sed commodo.
            </p>
          </div>
  
          {/* Service Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-40 w-52 mx-auto mb-4">
                {/* Icon */}
                <img src="images/dent-removal.jpg" alt="Dent Removal" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Dent removal</h3>
              <p className="mt-2 text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-40 w-52 mx-auto mb-4">
                {/* Icon */}
                <img src="images/custom-painting.jpg" alt="Custom Painting" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Custom painting</h3>
              <p className="mt-2 text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-40 w-52 mx-auto mb-4">
                {/* Icon */}
                <img src="images/motor-works.jpg" alt="Motor Works" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Motor works</h3>
              <p className="mt-2 text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit
              </p>
            </div>
  
            {/* Service 4 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-40 w-52 mx-auto mb-4">
                {/* Icon */}
                <img src="images/damage-repairs.jpg" alt="Damage Repairs" className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Damage repairs</h3>
              <p className="mt-2 text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  