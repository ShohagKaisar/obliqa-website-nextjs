"use client";
import React from 'react';

const Map = () => {
  return (
    <div className='bg-[#F5F7FA] dark:bg-slate-950 py-10 transition-colors duration-300'>
      <div className="flex flex-col">
        <h1 className="text-center text-5xl font-extrabold my-4 text-black dark:text-white transition-colors duration-300">Our Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2ssg!4v1745751087301!5m2!1sen!2ssg"
          height={400}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}

export default Map;
