'use client';

import React, { useState } from 'react';
import { FaBolt } from 'react-icons/fa';

export default function ElectricityBillCalculator() {
  const [units, setUnits] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState<{
    totalBill: number;
    breakdown: {
      units: number;
      rate: number;
      subtotal: number;
      tax: number;
      total: number;
    };
  } | null>(null);

  const calculateBill = () => {
    if (!units || !rate) return;

    const unitsConsumed = parseFloat(units);
    const ratePerUnit = parseFloat(rate);
    const subtotal = unitsConsumed * ratePerUnit;
    const tax = subtotal * 0.18; // 18% tax
    const total = subtotal + tax;

    setResult({
      totalBill: total,
      breakdown: {
        units: unitsConsumed,
        rate: ratePerUnit,
        subtotal,
        tax,
        total,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center mb-8">
            <FaBolt className="h-12 w-12 text-blue-500" />
            <h1 className="ml-4 text-3xl font-bold text-gray-900 dark:text-white">
              Electricity Bill Calculator
            </h1>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Units Consumed (kWh)
                </label>
                <input
                  type="number"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white"
                  placeholder="Enter units consumed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Rate per Unit (₹)
                </label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white"
                  placeholder="Enter rate per unit"
                />
              </div>
            </div>

            <button
              onClick={calculateBill}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate
            </button>

            {result && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
                <h2 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-4">
                  Bill Breakdown
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-blue-700 dark:text-blue-300">Units Consumed:</span>
                    <span className="font-medium text-blue-900 dark:text-blue-100">
                      {result.breakdown.units} kWh
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700 dark:text-blue-300">Rate per Unit:</span>
                    <span className="font-medium text-blue-900 dark:text-blue-100">
                      ₹{result.breakdown.rate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700 dark:text-blue-300">Subtotal:</span>
                    <span className="font-medium text-blue-900 dark:text-blue-100">
                      ₹{result.breakdown.subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700 dark:text-blue-300">Tax (18%):</span>
                    <span className="font-medium text-blue-900 dark:text-blue-100">
                      ₹{result.breakdown.tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-blue-200 dark:border-blue-700 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-blue-900 dark:text-blue-100">
                        Total Bill:
                      </span>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ₹{result.totalBill.toFixed(2)}
                      </span>
                    </div>
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