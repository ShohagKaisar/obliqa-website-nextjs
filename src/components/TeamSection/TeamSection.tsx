"use client";

import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Md. Mehdi Hasan",
      role: "Founder & CEO",
      image: "/Image/Mamun.jpeg",
      bio: "Visionary leader with 7+ years of experience in full-stack development and business strategy.",
    },
    {
      name: "Md. Shohag Kaisar",
      role: "Co-Founder & CTO",
      image: "/Image/Shohag.jpg",
      bio: "Tech Architect at OBLIQA IT, leading system design and innovation. Skilled in full-stack development and WordPress.",
    },
    // {
    //   name: "Noman Ahmed Shuvon",
    //   role: "Sr. Digital Marketing Expert",
    //   image: "/Image/Shuvon.jpg",
    //   bio: "Digital Marketing Expert with 5+ years’ experience in SEO, social media, and paid ads focused on growth and visibility.",
    // },
    {
      name: "Iftiaz Ahamed Evan",
      role: "Digital Marketing Expert",
      image: "/Image/Evan.jpg",
      bio: "SEO & Social Media expert with a record of growing brands online.",
    },
    {
      name: "Md. Munna Miah",
      role: "Digital Marketing Expert",
      image: "/Image/Munna.jpg",
      bio: "Performance marketing and lead generation specialist.",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Meet Our Team</h2>
        <div className="h-1 w-20 bg-[#ff6900] mx-auto mb-10 rounded-full" />

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-3 gap-12 justify-items-center lg:px-16">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl p-6 text-center border-t-4 border-[#ff6900] hover:shadow-xl transition-all duration-300 w-full max-w-xs overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariant}
            >
              {/* Watermark */}
              {/* <div className="absolute top-28 right-2 text-xs text-[#ff6900]/20 font-bold rotate-[-10deg] pointer-events-none select-none">
                <img className="opacity-20" src={logo} alt="" />
              </div> */}

              <img
                src={member.image}
                alt={member.name}
                className="w-44 h-44 rounded-full mx-auto object-cover border-4 border-[#ff6900] shadow"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{member.name}</h3>
              <p className="text-[#ff6900] font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:flex justify-center gap-12 mt-12">
          {teamMembers.slice(3).map((member, index) => (
            <motion.div
              key={index + 3}
              className="relative bg-white shadow-lg rounded-2xl p-6 text-center border-t-4 border-[#ff6900] hover:shadow-xl transition-all duration-300 w-full max-w-xs overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index + 3}
              variants={cardVariant}
            >
              {/* Watermark */}
              {/* <div className="absolute top-28 right-2 text-xs text-[#ff6900]/20 font-bold rotate-[-10deg] pointer-events-none select-none">
                <img className="opacity-20" src={logo} alt="" />
              </div> */}

              <img
                src={member.image}
                alt={member.name}
                className="w-44 h-44 rounded-full mx-auto object-cover border-4 border-[#ff6900] shadow"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{member.name}</h3>
              <p className="text-[#ff6900] font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="lg:hidden overflow-x-auto flex space-x-4 px-2 py-4 snap-x snap-mandatory scrollbar-hide">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl p-6 text-center border-t-4 border-[#ff6900] hover:shadow-xl transition-all duration-300 min-w-[260px] max-w-xs snap-start overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariant}
            >
              {/* Watermark */}
              <div className="absolute bottom-2 right-2 text-xs text-[#ff6900]/20 font-bold rotate-[-10deg] pointer-events-none select-none">
                OBLIQA IT Solutions
              </div>

              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#ff6900] shadow"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{member.name}</h3>
              <p className="text-[#ff6900] font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
