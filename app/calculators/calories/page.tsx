'use client';

import { useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

export default function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
  } | null>(null);

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseFloat(age);
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears;
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    
    // Calculate TDEE based on activity level
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };
    
    const tdee = bmr * activityMultipliers[activityLevel];
    
    setResult({
      bmr,
      tdee,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Calorie Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={calculateCalories} className="space-y-6">
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age (years)
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700">
                Activity Level
              </label>
              <select
                id="activityLevel"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Lightly active (light exercise 1-3 days/week)</option>
                <option value="moderate">Moderately active (moderate exercise 3-5 days/week)</option>
                <option value="active">Very active (hard exercise 6-7 days/week)</option>
                <option value="veryActive">Extra active (very hard exercise & physical job)</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Calculate Calories
            </button>
          </form>
          
          {result !== null && (
            <div className="mt-8 p-4 bg-purple-50 rounded-md">
              <h2 className="text-xl font-semibold text-purple-800">Daily Calorie Needs</h2>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Basal Metabolic Rate (BMR):</span>
                  <span className="font-semibold">{Math.round(result.bmr)} calories</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Daily Energy Expenditure (TDEE):</span>
                  <span className="font-semibold text-purple-600">{Math.round(result.tdee)} calories</span>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>To maintain weight: Eat {Math.round(result.tdee)} calories</p>
                <p>To lose weight: Eat {Math.round(result.tdee - 500)} calories</p>
                <p>To gain weight: Eat {Math.round(result.tdee + 500)} calories</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
} 