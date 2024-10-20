'use client';

import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="bg-white">

      <section className="bg-blue-100 py-10 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-6xl font-semibold text-gray-800">Contact Us</h1>
          <nav className="mt-2 lg:mt-4">
            <ul className="flex justify-center space-x-4 text-sm text-gray-500">
              <li>
                <a href="/" className="hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-14 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
          {/* Get in Touch */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl lg:text-6xl font-semibold text-gray-800 mb-4">Get in touch</h2>
            <p className="text-gray-400">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Address & Contact Details */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Address */}
            <div>
              <div className="flex items-center justify-center lg:justify-start mb-4">
              <svg className="text-black" width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                <h3 className="text-2xl font-semibold text-gray-800">Address</h3>
              </div>
              <p className="text-gray-600">
                Germany —<br />
                785 15th Street, Office 478, <br />
                Berlin, De 81566
              </p>
            </div>

            {/* Contact Details */}
            <div>
              <div className="flex items-center justify-center lg:justify-start mb-4">
              <svg className="text-black" width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

                <h3 className="text-2xl font-semibold text-gray-800">Contact Details</h3>
              </div>
              <p className="text-gray-600 underline">info@yoursite.com</p>
              <p className="text-black font-semibold mt-4">+1 840 841 25 69</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
