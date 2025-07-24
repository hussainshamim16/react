import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-emerald-900 shadow-xl rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-100 mb-6">Login to Sopra</h2>

        <form>
          {/* Username */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4 flex justify-between">
            <Link to="/signup" className="text-sm text-emerald-600 hover:underline lowercase">You Have No Account ?</Link>

            <Link to="/fb" className="text-sm text-emerald-600 hover:underline">Forgot password?</Link>

          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button className="btn border-none bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300">
              Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
