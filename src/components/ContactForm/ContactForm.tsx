"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Map from '../Map/Map';
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  // ✅ FIX 1: Type added
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIX 2: Type added
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_wtov8ck",
        "template_syejxgv",
        formData,
        "6ToSd4r0vmxRi_zYC"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message Sent Successfully!");
          setFormData({
            name: "",
            number: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Error Sending Message.");
        }
      );
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 pt-32 px-4 pb-6 transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 overflow-hidden"
        >
          <div className="md:flex">
            {/* Contact Form Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Let's Talk</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Have questions or want to discuss a project? Send us a message and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-white transition-all duration-300 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2" htmlFor="number">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +880 1234 567890"
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-white transition-all duration-300 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. example@domain.com"
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-white transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-white transition-all duration-300 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition duration-300 flex items-center justify-center shadow-lg shadow-brand-primary/30"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>

                {status && (
                  <p className={`text-center ${status.includes("Success") ? "text-green-600" : "text-red-600"}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-brand-primary/5 to-slate-100 dark:from-brand-primary/10 dark:to-slate-800/80 p-8 md:p-12 lg:p-16 border-l border-slate-100 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white dark:bg-slate-700 shadow-sm p-3.5 rounded-full mr-5 border border-slate-100 dark:border-slate-600">
                    <FiMapPin className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white dark:bg-slate-700 shadow-sm p-3.5 rounded-full mr-5 border border-slate-100 dark:border-slate-600">
                    <FiPhone className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">+880 170 680 3616</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white dark:bg-slate-700 shadow-sm p-3.5 rounded-full mr-5 border border-slate-100 dark:border-slate-600">
                    <FiMail className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">contact@obliqa.com</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700 space-y-4">
                  {/* 24/7 Online Support Highlight */}
                  <div className="flex items-center justify-between bg-gradient-to-r from-brand-primary to-orange-600 text-white px-5 py-3 rounded-xl shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                        <div className="relative w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="font-semibold text-sm">24/7 Support</span>
                    </div>
                    <span className="font-bold text-sm tracking-wide">Always Online</span>
                  </div>

                  {/* Regular Weekly Schedule */}
                  <div className="bg-white dark:bg-slate-900/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">Business Hours</h4>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Sun - Thu</span>
                        <span className="text-slate-800 dark:text-slate-200 font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Friday - Saturday</span>
                        <span className="text-brand-primary font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <Map></Map>
    </>
  );
};

export default ContactForm;