"use client";

import Link from "next/link";

const GetInTouch = () => {
  return (
    <div className='mt-4'>
      {/* Call to Action Section */}
        <section className="py-8 text-center px-6">
          <div className="container mx-auto">
            <h2 className="lg:text-5xl text-3xl font-bold mb-4 text-gray-800 dark:text-white transition-colors duration-300">Ready to Transform Your Business?</h2>
            <p className="max-w-xl mx-auto text-[#717171] dark:text-gray-400 mb-6 transition-colors duration-300">
              Let's work together to create a digital presence that drives results. Contact us today!
            </p>
            <Link onClick={() => window.scrollTo(0, 0)} href={'/contact'}>
            <button className="px-8 py-3 bg-[#f27f20] rounded-full font-semibold text-white bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Now
            </button>
      </Link>
          </div>
        </section>
    </div>
  );
};

export default GetInTouch;