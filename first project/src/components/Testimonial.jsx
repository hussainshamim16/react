import React from 'react';
import { motion } from 'framer-motion';
import userImage from '../assets/user.webp'

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Product Manager, TechFlow",
    feedback: "Sopra transformed the way our team collaborates. It's intuitive, fast, and simply brilliant!",
    img: { userImage },
  },
  {
    name: "Ali Raza",
    role: "Founder, InnovateX",
    feedback: "We tried many tools before, but Sopra's performance and simplicity truly stand out.",
    img: { userImage },
  },
  {
    name: "Sarah Malik",
    role: "UI/UX Designer, PixelPeak",
    feedback: "Designing with Sopra has been a delight — everything feels professional and well-thought-out.",
    img: { userImage },
  },
];

const Testimonials = () => {
  return (
    <section className="bg-color2 py-20 px-6 md:px-16 text-color4">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What our users say</h2>
          <p className="mt-4 text-lg text-emerald-300">
            Trusted by professionals across Pakistan and beyond.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((user, index) => (
         
            < motion.div
              key = { index }
              initial = {{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-emerald-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
          <div className="flex items-center mb-4">
            <img
              src={userImage}
              alt={user.name}
              className="w-14 h-14 rounded-full border-2 border-color3 mr-4"
            />
            <div>
              <h4 className="font-semibold text-emerald-900">{user.name}</h4>
              <p className="text-sm text-emerald-900">{user.role}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">“{user.feedback}”</p>
        </motion.div>
          ))}
      </div>
    </div>
    </section >
  );
};

export default Testimonials;
