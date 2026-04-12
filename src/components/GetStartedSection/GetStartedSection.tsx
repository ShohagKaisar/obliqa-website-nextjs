"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const cardVariants = {
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function GetStartedSection() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const sections = [
    {
      title: "Our Services",
      content: "We offer Web Design, Web Development, SEO, Digital Marketting and IT Consultancy.",
      color: "bg-white dark:bg-slate-900",
      icon: "/Icon/services.png",
      link: '/services'
    },
    {
      title: "How We Works",
      content: "Step-by-step: Consultation, Requirement Analysis, Development, Testing, Deployment.",
      color: "bg-white dark:bg-slate-900",
      icon: "/Icon/work-process.png",
      link: '/#how_we_work'
    },
    {
      title: "Pricing Plans",
      content: "Flexible pricing options to suit businesses of all sizes and budgets.",
      color: "bg-white dark:bg-slate-900",
      icon: "/Icon/price.png",
      link: '/pricing'
    },
    {
      title: "Portfolio",
      content: "Explore our recent projects showcasing our expertise and client solutions.",
      color: "bg-white dark:bg-slate-900",
      icon: "/Icon/portfolio.png",
      link: '/portfolio'
    },
    {
      title: "Testimonials",
      content: "Our clients love us! Read what they say about working with us.",
      color: "bg-white dark:bg-slate-900",
      icon: "/Icon/testimonials.png",
      link: '/testimonials'
    },
    {
      title: "Contact Us",
      content: "Get in touch or book a free consultation with our expert team.",
      color: "bg-white dark:bg-slate-900",
      icon: "/Icon/contact-us.png",
      link: '/contact'
    },
  ];

  return (
    <div id="get-started" className="mx-auto px-2 pb-4 sm:px-2 lg:px-6 bg-[#F5F7FA] dark:bg-slate-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-gray-800 dark:text-white bg-[#263238] dark:bg-transparent mb-2 transition-colors duration-300">
          Start Your Journey
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
          Discover how we can help transform your digital presence with our comprehensive services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 lg:px-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <motion.div
              variants={cardVariants}
              className={`h-full ${section.color} rounded-3xl shadow-md dark:shadow-none overflow-hidden text-white transition-colors duration-300`}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="w-10 -ms-2 mr-3"><img src={section.icon} alt="" /></span>
                  <h3 className="text-2xl font-bold text-[#263238] dark:text-white transition-colors duration-300">{section.title}</h3>
                </div>
                <p className="grow text-[#717171] dark:text-gray-400 transition-colors duration-300">{section.content}</p>
                <Link
                  href={section.link}
                  className="mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="flex items-center justify-center w-full py-3 border-2 text-[#263238] dark:text-white border-[#f27f20] border-opacity-30 bg-opacity-10 backdrop-blur-sm rounded-full font-medium hover:bg-opacity-20 transition-all duration-300"
                  >
                    Explore More <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
      </motion.div>
    </div>
  );
}