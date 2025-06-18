'use client';

import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default function DaysBetweenCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState<{
    days: number;
    weeks: number;
    months: number;
    years: number;
  } | null>(null);

  const calculateDifference = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate time difference in milliseconds
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30.44); // Average days in a month
    const diffYears = Math.floor(diffDays / 365.25); // Account for leap years

    setResult({
      days: diffDays,
      weeks: diffWeeks,
      months: diffMonths,
      years: diffYears,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center mb-8">
            <FaCalendarAlt className="h-12 w-12 text-blue-500" />
            <h1 className="ml-4 text-3xl font-bold text-gray-900 dark:text-white">
              Days Between Dates Calculator
            </h1>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <button
              onClick={calculateDifference}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate
            </button>

            {result && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
                <h2 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-4">
                  Time Difference
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-blue-700 dark:text-blue-300">Days</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {result.days}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-blue-700 dark:text-blue-300">Weeks</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {result.weeks}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-blue-700 dark:text-blue-300">Months</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {result.months}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-blue-700 dark:text-blue-300">Years</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {result.years}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 