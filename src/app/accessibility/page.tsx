// app/accessibility/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Obliqa IT Solutions",
  description:
    "Our commitment to accessibility and inclusive digital experiences.",
};

export default function Accessibility() {
  return (
    <section className="bg-[#F5F7FA] min-h-screen pt-24 pb-8 text-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Accessibility Statement
          </h1>
          <p className="text-gray-600">
            We are committed to making our website accessible to all users,
            regardless of ability or technology.
          </p>
        </div>

        <div className="space-y-8">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              1. Our Commitment
            </h2>
            <p className="text-gray-600">
              We strive to ensure our platform is inclusive and follows modern
              accessibility standards such as WCAG.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              2. Continuous Improvements
            </h2>
            <p className="text-gray-600">
              Our team regularly audits the website to identify and fix accessibility issues.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              3. Assistive Technologies
            </h2>
            <p className="text-gray-600">
              We aim to support screen readers, keyboard navigation, and other assistive tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              4. Contact & Feedback
            </h2>
            <p className="text-gray-600">
              If you face any accessibility issues, please contact us at
              <span className="text-orange-500 font-medium"> support@obliqa.com</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}