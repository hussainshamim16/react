import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/soft.png'; // Replace with your actual image

const About = () => {
  return (
    <section className="bg-color2 py-20 px-6 md:px-16 text-color4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-color3">Sopra</span>
          </h2>
          <p className="text-lg mb-4">
            Sopra is more than just software — it's your digital partner in efficiency. Designed with professionals in mind, Sopra offers a blend of modern design and intelligent features to make your workflow smoother, faster, and smarter.
          </p>
          <p className="text-md text-emerald-700">
            Whether you’re managing projects, collaborating with teams, or analyzing data, Sopra adapts to your needs with simplicity and speed. Our mission is to empower individuals and teams to achieve more with less effort.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src={aboutImg}
            alt="About Sopra"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
