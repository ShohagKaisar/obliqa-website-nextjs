"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from 'emailjs-com';
import Link from "next/link";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    price: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
          setFormData({ name: "", number: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Error Sending Message.");
        }
      );
  };

  return (
    <section className="bg-[#F5F7FA] pt-12 px-6 md:px-12 lg:px-24 mb-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">Our Pricing Plans</h2>
        <p className="text-gray-600">Affordable solutions to grow your digital presence</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-2">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative border rounded-xl p-6 shadow-md transition hover:shadow-xl ${plan.isPopular ? "border-orange-500 ring-2 ring-orange-300 bg-orange-50" : "bg-white"
              }`}
          >
            {plan.isPopular && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
            <div className="text-xl font-bold text-orange-500 mb-1">
              {plan.priceUSD} <span className="text-sm text-gray-500">({plan.priceBDT})</span>
            </div>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <ul className="space-y-2 mb-6 text-left text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={'/contact'}>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full font-semibold transition">
                Get Started
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Custom Plan Request Form */}
      <div className="mt-6 w-full p-4 md:p-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Custom Plan</h2>
          <p className="text-gray-600 mb-8">
            Tell us your goals, and we'll build a solution that fits your needs and budget.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="e.g. example@domain.com"
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="number">
                Phone Number
              </label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                placeholder="e.g. +880 1234 567890"
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                Your Budget Range
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="e.g. 10000 - 50000 BDT or USD"
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
              Plan Description
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Describe your requirements..."
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <FiSend className="mr-2" />
            Send Request
          </button>

          {status && (
            <p className={`text-center ${status.includes("Success") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default PricingPlans;
