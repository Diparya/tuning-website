import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      {/* Header Section */}

      {/* Banner Section */}
      <div className="relative bg-blue-100 py-10 lg:py-16 text-center">
        <h1 className="text-3xl lg:text-6xl font-semibold text-gray-800">About Us</h1>
        <p className="text-gray-500 mt-2 text-sm lg:text-lg">
          <Link href="/">Home</Link> / About Us
        </p>
      </div>

      {/* Main Content */}
      <section className="px-4 py-16 flex flex-col lg:flex-row justify-evenly items-center">
        {/* Image Section */}
        <img src="images/about01.png" alt="about01" width={500} height={200} className="rounded-lg"/>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-evenly items-stretch space-y-32">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Fast and reliable car repair services
            </h2>
            <p className="mt-4 text-gray-600 text-sm lg:text-lg">
              Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde
              omnis iste perspiciatis ut perspiciatis unde omnis iste natus ut
              perspiciatis unde omnis iste perspiciatis ut perspiciatis unde omnis
              iste natus ut perspiciatis unde omnis iste natus.
            </p>
          </div>
          <img src="images/about02.png" alt="about02" width={600} height={300} className="rounded-lg"/>
        </div>

      </section>
    </div>
  );
}
