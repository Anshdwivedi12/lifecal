'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaMobileAlt, FaSearch, FaLock, FaTools, FaReact, FaCss3Alt, FaCode } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    { icon: <FaCalculator className="w-6 h-6" />, text: "Clean and modern UI with category-wise calculators" },
    { icon: <FaMobileAlt className="w-6 h-6" />, text: "Mobile-first responsive design (feels like an app!)" },
    { icon: <FaSearch className="w-6 h-6" />, text: "Search and filter tools easily" },
    { icon: <FaLock className="w-6 h-6" />, text: "Secure, privacy-friendly (no data tracking)" }
  ];

  const tools = [
    "EMI Calculator",
    "BMI Calculator",
    "Age Calculator",
    "SIP Calculator",
    "Calorie Calculator",
    "Unit Converter",
    "Fuel Cost Estimator",
    "Paint Calculator"
  ];

  const techStack = [
    { icon: <FaReact className="w-6 h-6" />, name: "Next.js", desc: "Fast and powerful React framework" },
    { icon: <FaCss3Alt className="w-6 h-6" />, name: "Tailwind CSS", desc: "Beautiful and responsive design" },
    { icon: <FaCode className="w-6 h-6" />, name: "TypeScript", desc: "Code safety and developer experience" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About LifeCalc</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Your all-in-one daily life calculator app designed to simplify your everyday tasks
          </p>
        </motion.div>

        <motion.section
          {...fadeIn}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg mb-6 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">Why LifeCalc?</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Managing personal tasks often means juggling multiple apps, websites, or tools — and that can be frustrating. 
            LifeCalc brings everything into one clean, user-friendly place. Think of it as your Swiss Army knife of calculators!
          </p>
        </motion.section>

        <motion.section
          {...fadeIn}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg mb-6 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
              >
                <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeIn}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg mb-6 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">Available Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center"
              >
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeIn}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg mb-6 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">Built With</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{tech.name}</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeIn}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg mb-6 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Vision</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 italic text-center">
            "To simplify lives by offering intuitive and powerful daily tools in one single app."
          </p>
        </motion.section>

        <motion.section
          {...fadeIn}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">Creator Note</h2>
          <div className="flex flex-col items-center">
            <Image
              src="/img-03.jpg"
              alt="Creator"
              width={92}
              height={80}
              className="mb-4"
            />
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center">
              Hi 👋, I'm a developer passionate about solving real-life problems with simple tools. 
              This is one of my portfolio projects, and I'm constantly working to add more features. 
              Your feedback is welcome!
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutPage; 