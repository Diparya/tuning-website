// components/ContactForm.js
export default function ContactForm() {
    return (
      <section className="flex flex-col lg:flex-row space-y-5 justify-between items-center px-4 sm:px-6 lg:px-8 py-12 bg-white w-full">
        {/* Left Section: Text and Map */}
        <div className="w-full lg:w-1/2 pr-8">
          <h1 className="text-3xl lg:text-6xl font-semibold text-black mb-8">
            Have a project? <br /> Get in touch!
          </h1>
  
          {/* Google Map */}
          <div className="h-80 w-full rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126181.83352376934!2d-0.241681130698488!3d51.52877184003827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3338497b5b%3A0x0!2zNTHCsDMxJzQzLjciTiAwwrAwNycxNi44Ilc!5e0!3m2!1sen!2suk!4v1697599376941!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
  
        {/* Right Section: Contact Form */}
        <div className="w-full lg:w-1/2 bg-blue-50 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div className="flex items-center border-b border-gray-300 py-2">
              <input
                type="text"
                placeholder="Name"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
  
            <div className="flex items-center border-b border-gray-300 py-2">
              <input
                type="text"
                placeholder="Phone"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
  
            <div className="flex items-center border-b border-gray-300 py-2">
              <input
                type="email"
                placeholder="Email Address"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
  
            <div className="flex items-center border-b border-gray-300 py-2">
              <input
                type="text"
                placeholder="Subject"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
  
            <div className="flex items-center border-b border-gray-300 py-2">
              <textarea
                placeholder="How can we help you? Feel free to get in touch!"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                rows="3"
              ></textarea>
            </div>
  
            <div className="flex items-center mt-4">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-2 block text-gray-900">
                I agree that my submitted data is collected and stored.
              </label>
            </div>
  
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </section>
    );
  }
  