import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: "⚡",
    title: "Fast Performance",
    desc: "Optimized for blazing speed to ensure smooth workflow and minimal lag.",
  },
  {
    icon: "🛠️",
    title: "Customizable Tools",
    desc: "Tailor your setup with flexible tools designed for your specific needs.",
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    desc: "Built with security in mind to keep your data safe and protected.",
  },
  {
    icon: "📈",
    title: "Real-time Analytics",
    desc: "Track progress and performance in real-time with visual reports.",
  },
];

const Features = () => {
  return (
    <section className="bg-color1 py-20 px-6 md:px-16 text-color4" id='Features'>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Features that make <span className="text-color3">Sopra</span> powerful</h2>
        <p className="mt-4 text-lg">Everything you need to supercharge your productivity and workflow.</p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-emerald-500 h-[full]  shadow-md rounded-xl p-6 text-left hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
