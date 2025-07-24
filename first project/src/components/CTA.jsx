import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-color3 py-16 px-6 md:px-20 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to supercharge your workflow?
        </h2>
        <p className="text-lg mb-6">
          Start using <span className="font-semibold">Sopra</span> today and experience the difference.
        </p>
        <button className="btn bg-white text-color4 font-semibold hover:bg-color4 hover:text-white transition duration-300">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default CTA;
