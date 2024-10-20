// components/StatsSection.js
export default function StatsSection() {
    return (
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center">
            {/* Stat Block 1 */}
            <div className="text-center">
              <h2 className="text-8xl font-extrabold text-gray-200">98</h2>
              <p className="text-xl font-medium text-gray-600">Projects</p>
            </div>
  
            {/* Separator */}
            <div className="h-16 border-l border-gray-300"></div>
  
            {/* Stat Block 2 */}
            <div className="text-center">
              <h2 className="text-8xl font-extrabold text-gray-200">65</h2>
              <p className="text-xl font-medium text-gray-600">People</p>
            </div>
  
            {/* Separator */}
            <div className="h-16 border-l border-gray-300"></div>
  
            {/* Stat Block 3 */}
            <div className="text-center">
              <h2 className="text-8xl font-extrabold text-gray-200">10</h2>
              <p className="text-xl font-medium text-gray-600">Years</p>
            </div>
  
            {/* Separator */}
            <div className="h-16 border-l border-gray-300"></div>
  
            {/* Stat Block 4 */}
            <div className="text-center">
              <h2 className="text-8xl font-extrabold text-gray-200">15</h2>
              <p className="text-xl font-medium text-gray-600">Offices</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  