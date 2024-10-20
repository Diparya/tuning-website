export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Office Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office</h3>
            <p>Germany —</p>
            <p>785 15th Street, Office 478,<br/>Berlin, De 81566</p>
            <p className="mt-2"><a href="mailto:info@email.com" className="hover:underline">info@email.com</a></p>
            <p className="mt-1">+1 840 841 25 69</p>
          </div>
  
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Appointment</a></li>
              <li><a href="#" className="hover:underline">Contacts</a></li>
            </ul>
          </div>
  
          {/* Socials Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Twitter-x</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Dribble</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form action="#" className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="p-2 w-full rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                →
              </button>
            </form>
            <div className="mt-4">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-sm">
                I agree to the <a href="#" className="underline">Privacy Policy</a>
              </label>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center">
          <p>ThemeREX © 2024. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  