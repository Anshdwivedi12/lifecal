'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function FuelCalculator() {
  const [distance, setDistance] = useState('');
  const [fuelEfficiency, setFuelEfficiency] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [fuelNeeded, setFuelNeeded] = useState<number | null>(null);

  const calculateFuelCost = (e: React.FormEvent) => {
    e.preventDefault();
    
    const dist = parseFloat(distance);
    const efficiency = parseFloat(fuelEfficiency);
    const price = parseFloat(fuelPrice);
    
    const fuelRequired = dist / efficiency;
    const cost = fuelRequired * price;
    
    setFuelNeeded(fuelRequired);
    setTotalCost(cost);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Fuel Cost Calculator</h1>
          
          <form onSubmit={calculateFuelCost} className="space-y-6">
            <div>
              <label htmlFor="distance" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Distance (km)
              </label>
              <input
                type="number"
                id="distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="fuelEfficiency" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Fuel Efficiency (km/l)
              </label>
              <input
                type="number"
                id="fuelEfficiency"
                value={fuelEfficiency}
                onChange={(e) => setFuelEfficiency(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="fuelPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Fuel Price (₹/l)
              </label>
              <input
                type="number"
                id="fuelPrice"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="0.01"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate Cost
            </button>
          </form>

          {totalCost !== null && fuelNeeded !== null && (
            <div className="mt-8 space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Results</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Fuel Needed: <span className="font-semibold">{fuelNeeded.toFixed(2)} liters</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Total Cost: <span className="font-semibold">₹{totalCost.toFixed(2)}</span>
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