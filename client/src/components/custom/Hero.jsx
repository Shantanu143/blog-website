"use client";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Hero Image"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Elevate Your Digital Experience
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We help businesses create stunning web experiences that captivate
            and engage users. Join us today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-xl shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
