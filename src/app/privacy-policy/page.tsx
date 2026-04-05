// app/privacy-policy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Obliqa IT Solutions",
  description:
    "Detailed privacy policy explaining how Obliqa IT Solutions collects, uses, and protects user data.",
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#F5F7FA] min-h-screen pt-24 pb-8 text-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600 leading-relaxed">
            At Obliqa IT Solutions, we respect your privacy and are committed to
            protecting your personal information. This policy outlines how we collect,
            use, and safeguard your data.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-2 text-orange-500">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect personal data such as your name, email address,
              phone number, and browsing behavior when you interact with our website
              or services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-2 text-orange-500">
              2. How We Use Your Data
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information is used to improve our services, provide customer support,
              personalize user experience, and communicate updates or offers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-2 text-orange-500">
              3. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your data
              from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-2 text-orange-500">
              4. Cookies Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze traffic,
              and improve website functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}