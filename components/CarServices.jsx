import Image from 'next/image';
import Link from 'next/link';

export default function CarServices() {
  return (
    <section className="bg-white px-4 py-16">

      {/* Images Section */}

      {/* Text and Stats Section */}
      <div className="flex flex-col lg:flex-row justify-evenly">
        {/* Main Text */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-6xl font-semibold text-gray-900">
            We understand<br /> your car very well
          </h2>
          <p className="mt-4 text-gray-600 text-sm lg:text-lg">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore<br /> et dolore magna aliqua. Ut enim ad minim.
          </p>

          {/* Buttons */}
          <div className="flex items-center mt-6">
            <Link href="/about">
              <p className="bg-blue-600 text-white px-6 py-4 rounded-lg mr-4">
                About Us
              </p>
            </Link>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
            <svg height={60} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg>

              <i className="fas fa-play-circle mr-2"></i> Video Presentation
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col space-y-16 lg:space-y-28">
          <div className="flex flex-col lg:flex-row text-cente space-x-10">
            <h3 className="text-5xl lg:text-6xl font-semibold text-gray-900">30K+</h3>
            <div className='flex flex-col items-start space-y-2'>
              <p className="text-gray-600 text-2xl">Happy customers</p>
              <p className="text-gray-500 text-lg">
                Natus error sit voluptatem accusantium dolore.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start lg:flex-row text-center space-x-10">
            <h3 className="text-5xl lg:text-6xl font-semibold text-gray-900">2587</h3>
            <div className='flex flex-col items-start space-y-2'>
              <p className="text-gray-600 text-2xl">Perfect reviews</p>
              <p className="text-gray-500 text-lg">
                Natus error sit voluptatem accusantium dolore.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
