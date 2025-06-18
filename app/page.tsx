'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CalculatorCard from '@/components/CalculatorCard';
import Footer from '@/components/Footer';
import { FaSearch } from 'react-icons/fa';

const calculators = [
  {
    title: 'EMI Calculator',
    description: 'Calculate your monthly EMI payments for loans and mortgages.',
    category: 'finance',
    icon: '💰',
    href: '/calculators/emi',
  },
  {
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index and get health insights.',
    category: 'health',
    icon: '⚖️',
    href: '/calculators/bmi',
  },
  {
    title: 'Age Calculator',
    description: 'Calculate your exact age and important life milestones.',
    category: 'utilities',
    icon: '🎂',
    href: '/calculators/age',
  },
  {
    title: 'SIP Calculator',
    description: 'Plan your Systematic Investment Plan returns.',
    category: 'finance',
    icon: '📈',
    href: '/calculators/sip',
  },
  {
    title: 'Fuel Cost Estimator',
    description: 'Calculate your journey fuel costs and plan your trips.',
    category: 'travel',
    icon: '⛽',
    href: '/calculators/fuel',
  },
  {
    title: 'Calorie Calculator',
    description: 'Calculate your daily calorie needs and track your nutrition.',
    category: 'health',
    icon: '🍎',
    href: '/calculators/calories',
  },
  {
    title: 'Unit Converter',
    description: 'Convert between different units of measurement.',
    category: 'general',
    icon: '🔄',
    href: '/calculators/unit-converter',
  },
  {
    title: 'Paint Calculator',
    description: 'Calculate the amount of paint needed for your walls.',
    category: 'home',
    icon: '🎨',
    href: '/calculators/paint',
  },
  {
    title: 'Water Intake Calculator',
    description: 'Calculate your daily water intake requirements.',
    category: 'health',
    icon: '💧',
    href: '/calculators/water-intake',
  },
  {
    title: 'Days Between Dates',
    description: 'Calculate the number of days or weeks between two dates.',
    category: 'utilities',
    icon: '📅',
    href: '/calculators/days-between',
  },
  {
    title: 'Electricity Bill Calculator',
    description: 'Estimate your monthly electricity bill based on usage.',
    category: 'home',
    icon: '⚡',
    href: '/calculators/electricity',
  },
  {
    title: 'GPA Calculator',
    description: 'Calculate your SGPA and CGPA for academic performance.',
    category: 'education',
    icon: '🎓',
    href: '/calculators/gpa',
  },
  {
    title: 'Time Zone Converter',
    description: 'Convert times between different time zones worldwide.',
    category: 'time/global',
    icon: '🌍',
    href: '/calculators/timezone',
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCalculators = useMemo(() => {
    return calculators.filter(calculator => {
      const matchesSearch = calculator.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          calculator.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || calculator.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(calculators.map(calc => calc.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${selectedCategory === category
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-200 dark:hover:border-gray-500'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search calculators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Search Results Message */}
          {searchQuery && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {filteredCalculators.length} results found for "{searchQuery}"
            </p>
          )}

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCalculators.map((calculator) => (
              <CalculatorCard
                key={calculator.title}
                {...calculator}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredCalculators.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No calculators found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 