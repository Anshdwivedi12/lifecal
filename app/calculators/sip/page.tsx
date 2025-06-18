'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [totalInvestment, setTotalInvestment] = useState<number | null>(null);
  const [totalReturns, setTotalReturns] = useState<number | null>(null);
  const [maturityValue, setMaturityValue] = useState<number | null>(null);

  const calculateSIP = (e: React.FormEvent) => {
    e.preventDefault();
    
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / 100 / 12; // Monthly rate
    const t = parseFloat(timePeriod) * 12; // Total months
    
    const totalInvested = P * t;
    const maturityAmount = P * ((Math.pow(1 + r, t) - 1) / r) * (1 + r);
    const returns = maturityAmount - totalInvested;
    
    setTotalInvestment(totalInvested);
    setTotalReturns(returns);
    setMaturityValue(maturityAmount);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">SIP Calculator</h1>
          
          <form onSubmit={calculateSIP} className="space-y-6">
            <div>
              <label htmlFor="monthlyInvestment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Monthly Investment (₹)
              </label>
              <input
                type="number"
                id="monthlyInvestment"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="100"
              />
            </div>

            <div>
              <label htmlFor="expectedReturn" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                id="expectedReturn"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="timePeriod" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Time Period (Years)
              </label>
              <input
                type="number"
                id="timePeriod"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="1"
                max="40"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate Returns
            </button>
          </form>

          {totalInvestment !== null && totalReturns !== null && maturityValue !== null && (
            <div className="mt-8 space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Results</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Total Investment: <span className="font-semibold">₹{totalInvestment.toFixed(2)}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Total Returns: <span className="font-semibold">₹{totalReturns.toFixed(2)}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Maturity Value: <span className="font-semibold">₹{maturityValue.toFixed(2)}</span>
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