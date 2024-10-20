import Image from 'next/image';

export default function Services() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-6xl font-semibold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 lg:text-lg">Curabitur tellus leo, euismod sit amet gravida at, egestas sed commodo.</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img className='rounded-lg' src="images/complete-wash.jpg" alt="Complete wash icon" width={300} height={300} />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Complete wash</h3>
            <p className="text-gray-600">Sed do eiusmod tempor</p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img className='rounded-lg' src="images/interior-wash.jpg" alt="Interior wash icon" width={300} height={300} />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Interior wash</h3>
            <p className="text-gray-600">Sed do eiusmod tempor</p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img className='rounded-lg' src="images/rubber-blackening.jpg" alt="Rubber blackening icon" width={300} height={300} />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Rubber blackening</h3>
            <p className="text-gray-600">Sed do eiusmod tempor</p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img className='rounded-lg' src="images/engine-wash.jpg" alt="Engine wash icon" width={300} height={300} />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Engine wash</h3>
            <p className="text-gray-600">Sed do eiusmod tempor</p>
          </div>
        </div>

        {/* Scrolling Text Section */}
        <div className="mt-16 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee">
            <span className="text-4xl font-bold text-gray-900">Car washing *</span>
            <span className="text-4xl font-bold text-gray-900">Interior detailing *</span>
            <span className="text-4xl font-bold text-gray-900">Rubber blackening *</span>
            <span className="text-4xl font-bold text-gray-900">Engine wash *</span>
          </div>
        </div>
      </div>

      
    </section>
  );
}
