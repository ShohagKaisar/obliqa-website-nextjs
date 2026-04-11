"use client";
import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Video from '../../shared/Video';
import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link';
import whatsappIcon from "../../assets/whatsapp_icon.png";

const video = '/Video/Hero_bg_video.mp4';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  const videoVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="relative w-full h-[100dvh] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Video with Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={videoVariants}
      >
        <Video videoSrc={video} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </motion.div>

      {/* Hero Content with Staggered Animations */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center text-white"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] filter brightness-110">
            OBLIQA IT Solutions
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          variants={itemVariants}
        >
          We deliver top-quality digital solutions, including web design, development, SEO, and marketing, tailored to your business. Our strategies boost growth, visibility, and digital transformation for startups and enterprises alike. With expert support, we ensure your success online.
        </motion.p>

        <motion.div variants={itemVariants}>
          <ScrollLink
            to="how_we_work"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-[#f27f20] to-orange-600 rounded-full font-bold text-white transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </ScrollLink>
        </motion.div>
      </motion.div>

      {/* Animated Whatsapp Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-50"
        animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hidden md:flex w-6 h-10 border-2 border-white rounded-full justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-1"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="md:hidden relative z-50">
          <a
            href="https://api.whatsapp.com/send?phone=8801706803616"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-14 h-14 rounded-full bg-white/10 backdrop-blur-md justify-center items-center"
          >
            <img className="h-8 w-8" src={whatsappIcon.src} alt="WhatsApp Chat" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;