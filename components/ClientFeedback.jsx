export default function ClientFeedback() {
    return (
      <section className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Feedback Section */}
          <div className="py-16 px-8 lg:py-24 lg:px-16 space-y-8">
            <h2 className="text-3xl lg:text-6xl font-bold mb-6">Clients' feedback</h2>
            <p className="lg:text-lg mb-4 text-gray-400">
              "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Consectetur adipiscing elit."
            </p>
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src="images/natalie-jones.jpg"
                alt="Natalie Jones"
              />
              <div>
                <h3 className="font-semibold">Natalie Jones</h3>
                <p className="text-sm text-gray-400">Los Angeles, CA</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-6">
              {/* Pagination indicators */}
              <span className="block w-3 h-3 bg-white rounded-full"></span>
              <span className="block w-3 h-3 bg-gray-500 rounded-full"></span>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="hidden lg:block">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="images/car-feedback.jpg"
              alt="Car"
            />
          </div>
        </div>
      </section>
    );
  }
  