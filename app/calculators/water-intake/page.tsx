'use client';

import React, { useState } from 'react';
import { FaTint } from 'react-icons/fa';

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [climate, setClimate] = useState('temperate');
  const [waterIntake, setWaterIntake] = useState<number | null>(null);

  const calculateWaterIntake = () => {
    if (!weight) return;

    const weightInKg = parseFloat(weight);
    let baseIntake = weightInKg * 0.033; // Base calculation: 33ml per kg

    // Adjust for activity level
    switch (activityLevel) {
      case 'low':
        baseIntake *= 1;
        break;
      case 'moderate':
        baseIntake *= 1.2;
        break;
      case 'high':
        baseIntake *= 1.5;
        break;
    }

    // Adjust for climate
    switch (climate) {
      case 'hot':
        baseIntake *= 1.2;
        break;
      case 'cold':
        baseIntake *= 0.9;
        break;
      case 'temperate':
        baseIntake *= 1;
        break;
    }

    setWaterIntake(Math.round(baseIntake * 100) / 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center mb-8">
            <FaTint className="h-12 w-12 text-blue-500" />
            <h1 className="ml-4 text-3xl font-bold text-gray-900 dark:text-white">
              Water Intake Calculator
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-blue-500 focus:ring-blue-500 
                         dark:bg-gray-700 dark:text-white"
                placeholder="Enter your weight"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Activity Level
              </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-blue-500 focus:ring-blue-500 
                         dark:bg-gray-700 dark:text-white"
              >
                <option value="low">Low (Sedentary)</option>
                <option value="moderate">Moderate (Regular Exercise)</option>
                <option value="high">High (Intense Exercise)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Climate
              </label>
              <select
                value={climate}
                onChange={(e) => setClimate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-blue-500 focus:ring-blue-500 
                         dark:bg-gray-700 dark:text-white"
              >
                <option value="cold">Cold</option>
                <option value="temperate">Temperate</option>
                <option value="hot">Hot</option>
              </select>
            </div>

            <button
              onClick={calculateWaterIntake}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate
            </button>

            {waterIntake !== null && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
                <h2 className="text-lg font-medium text-blue-900 dark:text-blue-100">
                  Recommended Daily Water Intake
                </h2>
                <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {waterIntake} liters
                </p>
                <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                  This is an estimate based on your inputs. Remember to adjust based on your individual needs and consult a healthcare professional for personalized advice.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 