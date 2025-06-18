'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-500 dark:bg-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          All-in-One Daily Life Calculator
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg sm:text-xl md:mt-5 md:text-2xl">
          Simplify your daily calculations with our comprehensive suite of tools. From finance to
          health, we've got you covered.
        </p>
      </div>
    </div>
  );
};

export default Hero; 