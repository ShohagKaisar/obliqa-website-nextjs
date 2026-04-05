"use client";
const about_video = "/Video/about_video.mp4";
import GetInTouch from '../../shared/GetInTouch';
import Video from '../../shared/Video';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { motion } from "framer-motion";
import TeamSection from '../TeamSection/TeamSection';

const AboutObliqa = () => {

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section with Background Video */}
      <section className="relative w-full pt-28 pb-10 lg:h-screen flex items-center justify-center text-center text-white">
  {/* Background Video */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <Video videoSrc={about_video} className="w-full h-full object-cover absolute" />
    <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> {/* Dark Overlay */}
  </div>

  {/* Hero Content */}
  <motion.div
    className="relative z-10 px-6"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h1 className="text-4xl lg:text-7xl font-bold">About OBLIQA IT Solutions</h1>
    <p className="mt-4 text-md lg:text-xl max-w-xl mx-auto">
      Your trusted partner in web design, development, SEO, and digital marketing.
    </p>
  </motion.div>
</section>
      {/* About Us Section */}
      <section className="py-4 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold my-6">About Us</h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-justify">
            At OBLIQA IT Solutions, we stand for excellence, faith, and innovation. As a startup company, we bring fresh ideas and a dynamic approach to the ever-evolving tech industry. We don’t just take on projects, we take our clients visions seriously, turning their ideas into success stories.

            Technology should empower businesses, not just support them. That’s why we go beyond coding. We strategize, innovate, and deliver solutions that truly make a difference. Whether it’s a small startup or a large enterprise, our expert development team is ready to build, scale, and optimize with cutting-edge technology.

            But we’re not stopping here. Our mission is bigger. We aim to make OBLIQA IT Solutions a globally recognized technology leader known for delivering solutions that redefine industries while keeping client satisfaction at the heart of everything we do.

            Let’s build the future together.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pt-4 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold my-6">Our Mission</h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-justify">
            At OBLIQA IT Solutions, our mission is to empower businesses of all sizes by delivering cutting-edge, scalable, and intuitive digital solutions that drive growth and efficiency. We are committed to helping our clients thrive in an increasingly digital world by offering customized services in web development, mobile applications, digital marketing, and cloud-based technologies.
            Through continuous innovation, a client-first mindset, and a deep understanding of emerging trends, we aim to transform ideas into impactful digital experiences. Our goal is not only to solve current challenges but to anticipate future opportunities enabling our clients to stay ahead in a competitive marketplace.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <div className='px-4 flex items-center justify-center'>
        <ServiceDetails></ServiceDetails>
      </div>
      <div>
        <TeamSection></TeamSection>
      </div>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default AboutObliqa;
