// app/ethics-compliance/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethics & Compliance | Obliqa IT Solutions",
  description:
    "Learn about our ethical standards and compliance practices.",
};

export default function EthicsCompliance() {
  return (
    <section className="bg-[#F5F7FA] min-h-screen pb-8 pt-24 text-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Ethics & Compliance
          </h1>
          <p className="text-gray-600">
            We are committed to maintaining the highest ethical standards in all
            business operations and client relationships.
          </p>
        </div>

        <div className="space-y-8">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              1. Integrity
            </h2>
            <p className="text-gray-600">
              We operate with honesty, transparency, and fairness in all our dealings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              2. Legal Compliance
            </h2>
            <p className="text-gray-600">
              We strictly follow all applicable laws and industry regulations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              3. Anti-Corruption
            </h2>
            <p className="text-gray-600">
              We have zero tolerance for bribery, corruption, or unethical practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              4. Reporting Concerns
            </h2>
            <p className="text-gray-600">
              Concerns can be reported confidentially through official communication channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}