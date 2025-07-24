import React from 'react';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white shadow-xl rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-center text-emerald-600 mb-4">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Enter your email or username and we’ll send you a link to reset your password.
        </p>

        <form>
          {/* Email or Username */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Email or Username</span>
            </label>
            <input
              type="text"
              placeholder="example@email.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Send Button */}
          <div className="form-control">
            <button className="btn bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300">
              Send Reset Link
            </button>
          </div>
        </form>

        {/* Back to login */}
        <div className="mt-6 text-center">
          <a href="/login" className="text-sm text-emerald-600 hover:underline">
            Back to Login
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
