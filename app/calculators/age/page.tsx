'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = (e: React.FormEvent) => {
    e.preventDefault();
    
    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    setAge({ years, months, days });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Age Calculator</h1>
          
          <form onSubmit={calculateAge} className="space-y-6">
            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Date of Birth
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate Age
            </button>
          </form>

          {age !== null && (
            <div className="mt-8 space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Your Age</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Years: <span className="font-semibold">{age.years}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Months: <span className="font-semibold">{age.months}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Days: <span className="font-semibold">{age.days}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 