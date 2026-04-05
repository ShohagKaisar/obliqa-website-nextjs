"use client";
// import React from 'react';
import './WhyChoseUs.css';
const WhyChoseUs = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="text-gray-800 sticky top-[90px] flex justify-center text-5xl max-md:text-4xl font-bold py-6 w-[90%] mx-auto">
          <h1>Why Choose Us</h1>
        </div>
        <div className="whychooseus">
          <div className="whychooseuscard lg:px-16 max-md:px-8 one">
            <h1 className="pb-5 lg:text-6xl max-md:text-2xl ">
              Expertise Across Technologies
            </h1>
            <p className="lg:text-xl max-md:2xl">
              Skilled in a broad spectrum of modern technologies including HTML, React, AWS, Docker, and more, enabling us to deliver robust solutions for websites, mobile apps, CMS platforms, and custom software.
            </p>
          </div>
          <div className="whychooseuscard lg:px-16 max-md:px-8 two">
            <h1 className="pb-5 lg:text-6xl max-md:text-2xl">
              Custom Solutions for Every Need
            </h1>
            <p className="lg:text-xl max-md:2xl">
              Providing unique, tailored solutions that address the distinct
              challenges of clients, ensuring maximum value and efficiency.
            </p>
          </div>
          <div className="whychooseuscard lg:px-16 max-md:px-8 three">
            <h1 className="pb-5 lg:text-6xl max-md:text-2xl">Timely & Reliable Delivery</h1>
            <p className="lg:text-xl max-md:2xl">
              We follow agile workflows and project timelines strictly to ensure on-time delivery without compromising quality.
            </p>
          </div>
          <div className="whychooseuscard lg:px-16 max-md:px-8 four">
            <h1 className="pb-5 lg:text-6xl max-md:text-2xl">Client-Focused Approach</h1>
            <p className="lg:text-xl max-md:2xl">
              Your goals are our top priority. We tailor every project to meet your unique business needs and ensure client satisfaction at every step.
            </p>
          </div>
          <div className="whychooseuscard lg:px-16 max-md:px-8 five z-20">
            <h1 className="pb-5 lg:text-6xl max-md:text-2xl">
              Innovative Problem Solving
            </h1>
            <p className="lg:text-xl max-md:2xl">
              Our team doesn’t just code, we think. We offer smart, scalable solutions to real-world challenges using the latest tools and best practices.
            </p>
          </div>
          <div className="whychooseuscard lg:px-16 max-md:px-8 six z-20">
            <h1 className="pb-5 lg:text-6xl max-md:text-2xl">
              End-to-End Service
            </h1>
            <p className="lg:text-xl max-md:2xl">
              From idea to deployment and beyond, we provide complete service: consulting, design, development, testing, and post-launch support.
            </p>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>

    </div>
  );
}

export default WhyChoseUs;
