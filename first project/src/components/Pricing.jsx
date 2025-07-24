import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: 'Free One Month',
    features: [
      'Single User',
      'Basic Analytics',
      'Email Support',
      'Limited Access',
    ],
    button: 'Start Free',
  },
  {
    name: 'Pro',
    price: 'Rs. 2,999/month',
    features: [
      'Up to 5 Users',
      'Advanced Reports',
      'Priority Support',
      'Cloud Storage',
    ],
    button: 'Get Pro',
  },
  {
    name: 'Enterprise',
    price: 'Rs. 9,999/month',
    features: [
      'Unlimited Users',
      'Dedicated Account Manager',
      '24/7 Support',
      'All Features',
    ],
    button: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section className="bg-color1 py-20 px-6 md:px-16 text-color4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans</h2>
        <p className="mt-4 text-lg">Choose the plan that fits your needs. All prices are in PKR.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-emerald-500 rounded-xl shadow-md p-8 text-left hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-color3 mb-4">{plan.price}</p>
            <ul className="text-sm text-emerald-100 mb-6 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <button className="btn bg-color3 text-white hover:bg-color4 transition duration-300">
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
