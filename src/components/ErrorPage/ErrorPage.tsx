"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // or use Next.js Link if you're using Next

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-extrabold text-[#ff6900]"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-500 mt-2 max-w-md mx-auto"
        >
          The page you’re looking for doesn’t exist or has been moved. Let’s get you back to the homepage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6"
        >
          <Link
            href="/"
            className="inline-block bg-[#ff6900] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition duration-300"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ErrorPage;
