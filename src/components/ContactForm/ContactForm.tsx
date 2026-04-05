"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "../Map/Map";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

type FormDataType = {
  name: string;
  email: string;
  number: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  // ✅ FIX 1: Type added
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIX 2: Type added
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_wtov8ck",
        "template_syejxgv",
        formData,
        "6ToSd4r0vmxRi_zYC"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message Sent Successfully!");
          setFormData({
            name: "",
            number: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Error Sending Message.");
        }
      );
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-[#F5F7FA] pt-32 px-4 pb-12">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">

            {/* Contact Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions or want to discuss a project? Send us a message and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />

                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg flex justify-center items-center gap-2">
                  <FiSend />
                  Send Message
                </button>

                {status && (
                  <p className="text-center text-sm text-gray-600">
                    {status}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/2 bg-gray-100 p-10">
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>

              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <FiMapPin /> Dhaka, Bangladesh
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone /> +880 170 680 3616
                </p>
                <p className="flex items-center gap-2">
                  <FiMail /> contact@obliqa.com
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Map />
    </>
  );
};

export default ContactForm;