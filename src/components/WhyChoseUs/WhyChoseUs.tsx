"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Expertise Across Technologies",
    description: "Skilled in a broad spectrum of modern technologies including Next.js, React, AWS, Docker, and more, enabling us to deliver robust solutions for any platform."
  },
  {
    title: "Custom Solutions for Every Need",
    description: "Providing unique, tailored solutions that address the distinct challenges of clients, ensuring maximum value and efficiency."
  },
  {
    title: "Timely & Reliable Delivery",
    description: "We follow agile workflows and project timelines strictly to ensure on-time delivery without compromising quality."
  },
  {
    title: "Client-Focused Approach",
    description: "Your goals are our top priority. We tailor every project to meet your unique business needs and ensure client satisfaction at every step."
  },
  {
    title: "Innovative Problem Solving",
    description: "Our team doesn’t just code, we think. We offer smart, scalable solutions to real-world challenges using the latest tools and best practices."
  },
  {
    title: "End-to-End Service",
    description: "From idea to deployment and beyond, we provide complete service: consulting, design, development, testing, and post-launch support."
  }
];

export default function WhyChoseUs() {
  return (
    <div className="bg-[#F5F7FA] dark:bg-slate-950 py-20 px-6 lg:px-8 overflow-hidden relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white relative inline-block transition-colors duration-300">
            Why Choose Us
            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1.5 bg-brand-primary rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-bl-full transition-colors duration-500 group-hover:bg-brand-primary/10 dark:group-hover:bg-brand-primary/20 -z-0"></div>
              <div className="text-6xl font-black text-slate-100 dark:text-slate-800 absolute -top-4 -right-2 tracking-tighter mix-blend-multiply dark:mix-blend-color-dodge group-hover:text-brand-primary/10 dark:group-hover:text-brand-primary/20 transition-colors duration-500">
                0{index + 1}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 relative z-10 pr-6 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 transition-colors duration-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
