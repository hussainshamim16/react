import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-emerald-950 shadow-xl rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">Create Your Account</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" >
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="e.g. Hussain Shamim" className="input input-bordered" required />
          </div>

          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" placeholder="e.g. hussainshamim16" className="input input-bordered" required />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input type="email" placeholder="e.g. hussainshamimdev@gmail.com" className="input input-bordered" required />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="********" className="input input-bordered" required />
          </div>

          {/* Phone Number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input type="tel" placeholder="03XXXXXXXXX" className="input input-bordered" required />
          </div>

          {/* Date of Birth */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input type="date" className="input input-bordered" required />
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label> <br />
            <input type="radio" name="same" id="male" />
            <label htmlFor="male" className='px-2'>Male</label>
            <input type="radio" name="same" id="Female" />
            <label htmlFor="Female" className='ps-2'>Female</label>
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Role</span>
            </label> <br />
            <select name="" id="" className="select select-bordered w-full">
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>

          {/* Profile Photo */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Upload Profile Photo</span>
            </label>
            <input type="file" accept="image/*" className="file-input file-input-bordered w-full" />
          </div>

          {/* Submit Button */}
          <div className="form-control md:col-span-2 mt-4">
            <button className="btn bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300">
              Sign Up
            </button>
          </div>
        </form>

        {/* Already have an account? */}
        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-emerald-600 hover:underline">
            Already have an account? Login
          </Link>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
