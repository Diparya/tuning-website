import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="images/painting-service.png" // Replace with your image path
            alt="Painting Service"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 ml-20">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-800">
            Refresh your car with our services
          </h2>
          <p className="mt-4 text-gray-600 lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium unde omnis iste.
          </p>

          {/* List of Benefits */}
          <ul className="mt-6 space-y-2 lg:space-y-4">
            <li className="flex items-center text-gray-700">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Adipiscing elit sed
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Labore et dolore consectetur
            </li>
          </ul>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
