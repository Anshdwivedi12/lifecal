'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert cm to m
    
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue);
    
    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">BMI Calculator</h1>
          
          <form onSubmit={calculateBMI} className="space-y-6">
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="0.1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate BMI
            </button>
          </form>

          {bmi !== null && (
            <div className="mt-8 space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Results</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Your BMI: <span className="font-semibold">{bmi.toFixed(1)}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Category: <span className="font-semibold">{category}</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">BMI Categories</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Underweight: BMI less than 18.5</li>
                  <li>Normal weight: BMI 18.5-24.9</li>
                  <li>Overweight: BMI 25-29.9</li>
                  <li>Obese: BMI 30 or higher</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 