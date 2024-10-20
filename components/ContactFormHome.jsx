export default function ContactFormHome() {
    return (
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between">
          
          {/* Left Side Image */}
          <div className="">
            <img
              src="images/contactform.jpg"
              alt="Car detailing"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
  
          {/* Right Side Form */}
          <div className="md:w-1/2 p-6 ml-4">
            <h2 className="text-4xl font-semibold mb-6">Have questions?<br/> Get in touch!</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 text-black rounded-lg focus:outline-none bg-black border-b"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 text-black rounded-lg focus:outline-none bg-black border-b"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 text-black rounded-lg focus:outline-none bg-black border-b"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 text-black rounded-lg focus:outline-none bg-black border-b"
                />
              </div>
              
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 text-black rounded-lg focus:outline-none bg-black border-b"
                rows="4"
              ></textarea>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded text-gray-500"
                />
                <p className="text-sm text-gray-500">
                  I agree that my submitted data is collected and stored.
                </p>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-lg mt-7 w-full md:w-auto"
              >
                ✉ Get in Touch
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  