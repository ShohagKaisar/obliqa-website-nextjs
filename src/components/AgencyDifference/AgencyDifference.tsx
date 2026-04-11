"use client";
import { motion } from "framer-motion";
import {
  Layers,
  Smartphone,
  Gauge,
  ShieldCheck,
  Rocket,
  XCircle,
} from "lucide-react";

const ourApproach = [
  { icon: <Layers size={22} />, text: "Custom Solutions" },
  { icon: <Smartphone size={22} />, text: "Mobile-First Design" },
  { icon: <Gauge size={22} />, text: "Optimized for Speed" },
  { icon: <ShieldCheck size={22} />, text: "Enhanced Security" },
  { icon: <Rocket size={22} />, text: "Scalable Solutions" },
];

const otherAgencies = [
  "Limited Customization",
  "Lacks Mobile Optimization",
  "Slow Performance",
  "Basic Security",
  "Limited Scalability",
];

export default function AgencyDifference() {
  return (
    <section className="bg-[#F5F7FA] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center my-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How We’re <span className="text-orange-500">Different</span> from Other Agencies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why businesses trust Obliqa IT Solutions for modern,
            scalable, and secure web solutions.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Our Approach */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-3xl bg-white border border-slate-100 p-8 md:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-bl-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-brand-primary mb-8 relative z-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-primary rounded-full"></span>
              Our Approach
            </h3>

            <ul className="space-y-5">
              {ourApproach.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-gray-800"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other Agencies */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-10 shadow-lg relative overflow-hidden opacity-90"
          >
            <h3 className="text-2xl font-bold text-slate-500 mb-8 relative z-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-slate-300 rounded-full"></span>
              Other Agencies
            </h3>

            <ul className="space-y-5">
              {otherAgencies.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-gray-600"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <XCircle size={22} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build a High-Performance Website?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-orange-100">
            Work with Obliqa IT Solutions to create fast, secure, and scalable
            digital experiences that drive real business growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 hover:bg-orange-50 transition"
            >
              Get a Free Consultation
            </a>
            <a
              href="#portfolio"
              className="rounded-xl border border-white/50 px-8 py-4 font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              View Our Work
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
