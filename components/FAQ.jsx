import Image from 'next/image';

export default function FAQ() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Image */}
        <div className="rounded-lg overflow-hidden shadow-lg mr-5">
          <img
            src="images/faq.jpg" // Replace with actual image path
            alt="Mechanic working"
            width={640}
            height={960}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Right: FAQ */}
        <div>
          <h2 className="text-3xl lg:text-6xl font-semibold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">

            {/* FAQ 1 */}
            <div className="border-b border-gray-200 pb-4">
              <details className="group">
                <summary className="text-xl font-semibold cursor-pointer text-gray-700">
                  Do you work on big trucks?
                </summary>
                <p className="text-gray-600 mt-2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </details>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-gray-200 pb-4">
              <details className="group">
                <summary className="text-xl font-semibold cursor-pointer text-gray-700">
                  Can I see some of the before/after images?
                </summary>
                <p className="text-gray-600 mt-2"></p>
              </details>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-gray-200 pb-4">
              <details className="group">
                <summary className="text-xl font-semibold cursor-pointer text-gray-700">
                  Do you offer free consultations?
                </summary>
              </details>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
