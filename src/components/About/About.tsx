"use client";
import './about.css';
import Image from "next/image";
import companyLogoLight from '../../assets/logo-about.svg'
import companyLogoDark from '../../assets/logo.svg'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300" id="about-us">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={companyLogoLight} 
              alt='Obliqa Logo'
              className="w-full max-w-sm lg:max-w-md object-contain dark:hidden"
            />
            <Image
              src={companyLogoDark} 
              alt='Obliqa Logo'
              className="w-full max-w-sm lg:max-w-md object-contain hidden dark:block"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 relative transition-colors duration-300">
              About Us
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6 text-justify transition-colors duration-300">
              At <span className="font-semibold text-brand-primary">OBLIQA IT Solutions</span>, we stand for excellence, faith, and innovation. As a dynamic emerging agency, we bring fresh ideas and a dynamic approach to the ever-evolving tech industry. We don’t just take on projects, we take our clients' visions seriously, turning their ideas into success stories.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6 text-justify transition-colors duration-300">
              Technology should empower businesses, not just support them. That’s why we go beyond coding. We strategize, innovate, and deliver solutions that truly make a difference. Whether it’s a small startup or a large enterprise, our expert development team is ready to build, scale, and optimize with cutting-edge technology.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-justify transition-colors duration-300">
              Our mission is bigger. We aim to make OBLIQA IT Solutions a globally recognized technology leader known for delivering premium solutions that redefine industries. Let’s build the future together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infinite Scroll Ticker */}
      <div className="bg-slate-900 h-16 flex items-center overflow-hidden border-y border-slate-800 relative z-10">
        <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-slate-900 to-transparent z-20"></div>
        <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-slate-900 to-transparent z-20"></div>
        <ul className="scroll-content items-center flex space-x-12 text-xl md:text-2xl text-slate-300 font-bold uppercase tracking-wider whitespace-nowrap">
          <li>Branding</li>
          <li>Marketing</li>
          <li>Development</li>
          <li>Solution</li>
          <li>Service</li>
          <li>Idea</li>
          <li>Software</li>
          <li>Design</li>
          <li>Creative</li>
          <li>Boosting</li>
          <li>Strategy</li>
          {/* Duplicate for seamless scrolling */}
          <li aria-hidden="true">Branding</li>
          <li aria-hidden="true">Marketing</li>
          <li aria-hidden="true">Development</li>
          <li aria-hidden="true">Solution</li>
          <li aria-hidden="true">Service</li>
          <li aria-hidden="true">Idea</li>
          <li aria-hidden="true">Software</li>
          <li aria-hidden="true">Design</li>
          <li aria-hidden="true">Creative</li>
          <li aria-hidden="true">Boosting</li>
          <li aria-hidden="true">Strategy</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
