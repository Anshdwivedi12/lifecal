'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emi, setEmi] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);

  const calculateEMI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const time = parseFloat(loanTerm) * 12; // Total number of months
    
    const emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    const totalPayment = emi * time;
    const totalInterest = totalPayment - principal;
    
    setEmi(emi);
    setTotalPayment(totalPayment);
    setTotalInterest(totalInterest);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">EMI Calculator</h1>
          
          <form onSubmit={calculateEMI} className="space-y-6">
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                id="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="1000"
              />
            </div>

            <div>
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Loan Term (Years)
              </label>
              <input
                type="number"
                id="loanTerm"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
                min="1"
                max="30"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate EMI
            </button>
          </form>

          {emi !== null && totalPayment !== null && totalInterest !== null && (
            <div className="mt-8 space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Results</h2>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Monthly EMI: <span className="font-semibold">₹{emi.toFixed(2)}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Total Payment: <span className="font-semibold">₹{totalPayment.toFixed(2)}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Total Interest: <span className="font-semibold">₹{totalInterest.toFixed(2)}</span>
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