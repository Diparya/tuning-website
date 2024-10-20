// components/Hero.js
export default function Hero() {
    return (
      <section className="relative bg-blue-50 py-10 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-6xl font-semibold text-gray-900">Request a Quote</h1>
          <p className="mt-2 lg:mt-4 text-gray-600 text-sm">
            <a href="#">Home</a> / Request a Quote
          </p>
        </div>
      </section>
    );
  }
  