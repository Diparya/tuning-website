import Image from 'next/image';
import Link from 'next/link';

export default function CarEnhancement() {
  return (
    <section className="bg-gray-100 py-12 lg:py-16">
      <div className="px-4 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full mr-8 ml-8">
          <img
            src="images/car-polishing.jpg" // Add image path
            alt="Car polishing"
            width={700}
            height={700}
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-6">
            We enhance your vehicles’ beauty
          </h2>
          <p className="text-gray-600 mb-6 lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>

          {/* Button */}
          <Link href="/learn-more">
            <p className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
              Learn More
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
