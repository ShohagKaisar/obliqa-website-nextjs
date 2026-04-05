"use client";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiClipboard,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiSettings,
} from "react-icons/fi";

const WorkProcess = () => {
  const steps = [
    {
      title: "Phase 1: Discovery",
      description:
        "We engage in comprehensive interviews and workshops to gain a deep understanding of your business objectives, challenges, and technical requirements.",
      icon: <FiUsers className="text-indigo-600" size={36} />,
    },
    {
      title: "Phase 2: Strategic Roadmap",
      description:
        "Our team develops a detailed project plan, outlining key milestones, deliverables, and success metrics aligned with your strategic goals.",
      icon: <FiClipboard className="text-blue-600" size={36} />,
    },
    {
      title: "Phase 3: System Architecture",
      description:
        "We design scalable, high-performance solutions, incorporating intuitive user interfaces, robust APIs, and optimized database structures.",
      icon: <FiSettings className="text-emerald-600" size={36} />,
    },
    {
      title: "Phase 4: Agile Implementation",
      description:
        "Through iterative development sprints, we build your solution using modern frameworks, ensuring clean, well-documented code.",
      icon: <FiCode className="text-amber-600" size={36} />,
    },
    {
      title: "Phase 5: Quality Assurance",
      description:
        "We execute a thorough testing regimen, including unit tests, integration tests, and user acceptance testing, to guarantee reliability and performance.",
      icon: <FiCheckCircle className="text-purple-600" size={36} />,
    },
    {
      title: "Phase 6: Deployment & Support",
      description:
        "We manage seamless deployment with integrated monitoring and provide continuous maintenance, supported by detailed performance analytics.",
      icon: <FiUploadCloud className="text-rose-600" size={36} />,
    },
  ];

  return (
    <section id="how_we_work" className=" bg-[#F5F7FA]">
      <div className="container mx-auto px-6 pb-1 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-[#263238] uppercase">
            Our 6-Step Process
          </span>
          <h2 className="lg:text-5xl text-4xl font-bold text-gray-800 mt-3 mb-4">
            Transparent Development Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each phase is carefully executed to deliver exceptional results on
            time and within budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-7 lg:grid-cols-3 gap-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex flex-col items-start mb-6 space-y-3">
                  <div className="p-2 rounded-lg bg-indigo-50 mr-4 flex-shrink-0">
                    {step.icon}
                    <div className="flex items-center mb-1">
                      <span className="text-xs font-mono text-gray-400 mr-2">
                        Step {index + 1}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 font-semibold text-[#263238] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#717171] -mt-5">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
