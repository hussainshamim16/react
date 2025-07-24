import React from 'react'
import { motion } from 'framer-motion';
import heroImg from '../assets/soft.png'; // Replace with actual image

const HeroSection = () => {
    return (
        <section className="bg-color2 py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-color4 leading-tight">
                        Empower Your Workflow with <span className="text-color3">Sopra</span>
                    </h1>
                    <p className="mt-4 text-lg text-color4">
                        Experience modern software built for speed, collaboration, and simplicity — tailored for today’s professionals.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="btn bg-emerald-800 text-white hover:bg-emerald-900 transition duration-300">
                            Get Started
                        </button>
                        <button className="btn btn-outline border-color4 text-color4 hover:bg-color4 hover:bg-emerald-800 transition duration-300">
                            Learn More
                        </button>
                    </div>
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
                        src={heroImg}
                        alt="Sopra Preview"
                        className="w-full max-w-md mx-auto rounded-xl shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    )
}
export default HeroSection