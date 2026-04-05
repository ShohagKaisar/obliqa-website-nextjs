// app/terms-conditions/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Obliqa IT Solutions",
  description:
    "Understand the terms and conditions governing the use of Obliqa IT Solutions services.",
};

export default function TermsConditions() {
  return (
    <section className="bg-[#F5F7FA] min-h-screen pt-24 pb-8 text-gray-800">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using our services. By
            accessing Obliqa IT Solutions, you agree to follow our policies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 text-orange-500">
              Use of Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to use our services only for lawful purposes. Any misuse,
              unauthorized access, or disruption attempt is strictly prohibited.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 text-orange-500">
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All designs, code, branding, and content belong to Obliqa IT Solutions
              unless otherwise agreed in writing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 text-orange-500">
              Payments & Agreements
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Clients must follow agreed payment terms. Delays in payment may affect
              project timelines or delivery schedules.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-xl font-semibold mb-3 text-orange-500">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are not responsible for indirect damages, data loss, or business
              interruptions caused by using our services.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}