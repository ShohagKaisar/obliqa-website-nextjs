"use client";
import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiSend, FiX } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Basic",
    priceBDT: "৳20,000",
    priceUSD: "$150",
    description: "Simple online presence for individuals.",
    features: ["1 Page Website", "Responsive Design", "Contact Form", "Basic SEO"]
  },
  {
    name: "Starter",
    priceBDT: "৳35,000",
    priceUSD: "$275",
    description: "Ideal for startups looking to get online.",
    features: ["3 Page Website", "Mobile Optimization", "Google Indexing", "Live Chat Setup"]
  },
  {
    name: "Growth",
    priceBDT: "৳80,000",
    priceUSD: "$615",
    description: "Boost your brand's visibility and traffic.",
    features: ["5 Page Website", "Blog Integration", "SEO Optimization", "Google Analytics"]
  },
  {
    name: "Business",
    priceBDT: "৳1,25,000",
    priceUSD: "$960",
    description: "Professional website with SEO for SMEs.",
    features: ["CMS Integration", "Newsletter & Lead Forms", "On-page SEO", "Facebook Pixel Setup"]
  },
  {
    name: "Premium",
    priceBDT: "৳2,00,000",
    priceUSD: "$1550",
    description: "Best for high-converting marketing sites.",
    features: ["Custom Design", "Advanced SEO", "Speed Optimization", "Digital Ads Integration"]
  },
  {
    name: "Enterprise",
    priceBDT: "৳3,00,000",
    priceUSD: "$2300",
    description: "Complete digital ecosystem + consultancy.",
    features: ["Web App / Portal", "All Marketing Tools", "IT Strategy Consulting", "24/7 Dedicated Support"],
    isPopular: true
  }
];

const PricingPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    price: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_ry6rlfd",
        "template_j8bx9dc",
        formData,
        "0YllvmGmbCyANgFRr"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message Sent Successfully!");
          setFormData({ name: "", number: "", email: "", price: "", message: "" });
          // Auto-close after success
          setTimeout(() => {
            setIsModalOpen(false);
            setStatus("");
          }, 2500);
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Error Sending Message.");
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStatus("");
  };

  return (
    <>
      <section className="bg-[#F5F7FA] dark:bg-slate-950 pt-12 px-6 md:px-12 lg:px-24 pb-16 transition-colors duration-300">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block transition-colors duration-300">
            Our Pricing Plans
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1.5 bg-brand-primary rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 transition-colors duration-300">Affordable solutions to grow your digital presence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-8 shadow-xl transition-all duration-300 border ${
                plan.isPopular
                  ? "border-brand-primary/50 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-slate-900 shadow-brand-primary/20 scale-105 z-10"
                  : "border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 dark:shadow-none"
                }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300">{plan.name}</h3>
              <div className="text-xl font-bold text-orange-500 mb-1">
                {plan.priceUSD} <span className="text-sm text-gray-500 dark:text-gray-400">({plan.priceBDT})</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">{plan.description}</p>
              <ul className="space-y-4 mb-8 text-left text-slate-700 dark:text-slate-300 transition-colors duration-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheckCircle className={`${plan.isPopular ? "text-brand-primary" : "text-slate-400"} mr-3 text-xl`} />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={'/contact'}>
                <button
                  className={`w-full py-3 px-4 rounded-full font-bold transition-all duration-300 shadow-md ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-brand-primary to-orange-600 text-white hover:shadow-xl hover:from-orange-600 hover:to-brand-primary"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  Get Started
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan CTA Banner */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-orange-200 dark:border-orange-900/40 bg-gradient-to-br from-orange-50 to-white dark:from-slate-900 dark:to-slate-900 shadow-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-orange-300/10 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block" />
                Not sure which plan fits?
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                Build a <span className="text-orange-500">Custom Plan</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                Tell us your goals and we'll craft a tailored solution that fits your needs and budget.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="relative flex-shrink-0 inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/45 hover:-translate-y-0.5 text-sm whitespace-nowrap"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              Request Custom Plan
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── MODAL OVERLAY ── */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Panel */}
            <motion.div
              key="modal"
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-700 transition-colors duration-300"
                initial={{ scale: 0.92, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 22, stiffness: 280 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top orange accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-t-3xl" />

                <div className="p-7 md:p-10">
                  {/* Modal Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 text-orange-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-orange-200 dark:border-orange-800 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block" />
                        Custom Solution
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        Build Your <span className="text-orange-500">Custom Plan</span>
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                        Fill in the details below and we'll get back to you within 24 hours.
                      </p>
                    </div>
                    {/* Close button */}
                    <button
                      onClick={closeModal}
                      className="flex-shrink-0 ml-4 w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-500 transition-all duration-200"
                    >
                      <FiX size={17} />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300" htmlFor="modal-name">
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="modal-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300" htmlFor="modal-email">
                          Email Address <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="modal-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="e.g. hello@yourcompany.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300" htmlFor="modal-number">
                          Phone Number <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="modal-number"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          required
                          placeholder="e.g. +880 1234 567890"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300" htmlFor="modal-price">
                          Budget Range <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="modal-price"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          required
                          placeholder="e.g. $500 – $2,000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300" htmlFor="modal-message">
                        Project Description <span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe your project goals, features you need, and any specific requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 text-sm"
                      >
                        <FiSend className="text-base" />
                        Send My Request
                      </button>
                      <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                        Response within <span className="text-orange-500 font-medium">24 hours</span> guaranteed.
                      </p>
                    </div>

                    {/* Status */}
                    {status && (
                      <div className={`flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-xl border transition-colors duration-200 ${
                        status.includes("Success")
                          ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800"
                          : status === "Sending..."
                          ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800"
                          : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
                      }`}>
                        {status}
                      </div>
                    )}
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PricingPlans;
