
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (


    <div className="min-h-screen bg-base-200 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-7xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-color4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="btn bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300">
            Go to Homepage
          </button>
        </Link>
      </motion.div>
    </div>


  )
}

export default NoPage