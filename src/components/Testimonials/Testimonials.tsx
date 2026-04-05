"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Startup Founder",
    feedback:
      "OBLIQA built our website with amazing precision and speed. Their SEO services helped us rank on the first page within weeks!",
    service: "Web Development & SEO",
  },
  {
    name: "James Miller",
    role: "Marketing Manager, RetailCo",
    feedback:
      "Thanks to OBLIQA's digital marketing strategy, our sales have increased by 40%. Their team is responsive, creative, and results-driven.",
    service: "Digital Marketing",
  },
  {
    name: "Ayesha Rahman",
    role: "CEO, FintechPro",
    feedback:
      "We consulted OBLIQA for a full-stack tech plan, and their IT consultancy exceeded our expectations. Highly recommended!",
    service: "IT Consultancy",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12">
          Trusted by businesses across the globe for Web Development, SEO, Digital Marketing & IT Consultancy.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-orange-500 text-3xl mb-3" />
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <div className="mt-4 border-t pt-4">
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
                <p className="text-xs mt-1 text-orange-500">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
