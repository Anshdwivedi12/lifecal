'use client';

import { useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

type ConversionType = 'length' | 'weight' | 'temperature' | 'volume';

interface ConversionOption {
  label: string;
  value: string;
}

const conversionTypes: { [key in ConversionType]: ConversionOption[] } = {
  length: [
    { label: 'Meters', value: 'm' },
    { label: 'Kilometers', value: 'km' },
    { label: 'Centimeters', value: 'cm' },
    { label: 'Millimeters', value: 'mm' },
    { label: 'Inches', value: 'in' },
    { label: 'Feet', value: 'ft' },
    { label: 'Yards', value: 'yd' },
    { label: 'Miles', value: 'mi' },
  ],
  weight: [
    { label: 'Kilograms', value: 'kg' },
    { label: 'Grams', value: 'g' },
    { label: 'Milligrams', value: 'mg' },
    { label: 'Pounds', value: 'lb' },
    { label: 'Ounces', value: 'oz' },
  ],
  temperature: [
    { label: 'Celsius', value: 'c' },
    { label: 'Fahrenheit', value: 'f' },
    { label: 'Kelvin', value: 'k' },
  ],
  volume: [
    { label: 'Liters', value: 'l' },
    { label: 'Milliliters', value: 'ml' },
    { label: 'Cubic Meters', value: 'm3' },
    { label: 'Gallons', value: 'gal' },
    { label: 'Quarts', value: 'qt' },
    { label: 'Pints', value: 'pt' },
    { label: 'Cups', value: 'cup' },
  ],
};

export default function UnitConverter() {
  const [conversionType, setConversionType] = useState<ConversionType>('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const convertValue = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numValue = parseFloat(value);
    let convertedValue: number;

    switch (conversionType) {
      case 'length':
        convertedValue = convertLength(numValue, fromUnit, toUnit);
        break;
      case 'weight':
        convertedValue = convertWeight(numValue, fromUnit, toUnit);
        break;
      case 'temperature':
        convertedValue = convertTemperature(numValue, fromUnit, toUnit);
        break;
      case 'volume':
        convertedValue = convertVolume(numValue, fromUnit, toUnit);
        break;
      default:
        convertedValue = numValue;
    }

    setResult(convertedValue);
  };

  const convertLength = (value: number, from: string, to: string): number => {
    // Convert to meters first
    let meters = value;
    switch (from) {
      case 'km': meters *= 1000; break;
      case 'cm': meters *= 0.01; break;
      case 'mm': meters *= 0.001; break;
      case 'in': meters *= 0.0254; break;
      case 'ft': meters *= 0.3048; break;
      case 'yd': meters *= 0.9144; break;
      case 'mi': meters *= 1609.344; break;
    }

    // Convert from meters to target unit
    switch (to) {
      case 'km': return meters / 1000;
      case 'cm': return meters * 100;
      case 'mm': return meters * 1000;
      case 'in': return meters / 0.0254;
      case 'ft': return meters / 0.3048;
      case 'yd': return meters / 0.9144;
      case 'mi': return meters / 1609.344;
      default: return meters;
    }
  };

  const convertWeight = (value: number, from: string, to: string): number => {
    // Convert to kilograms first
    let kg = value;
    switch (from) {
      case 'g': kg *= 0.001; break;
      case 'mg': kg *= 0.000001; break;
      case 'lb': kg *= 0.45359237; break;
      case 'oz': kg *= 0.028349523125; break;
    }

    // Convert from kilograms to target unit
    switch (to) {
      case 'g': return kg * 1000;
      case 'mg': return kg * 1000000;
      case 'lb': return kg / 0.45359237;
      case 'oz': return kg / 0.028349523125;
      default: return kg;
    }
  };

  const convertTemperature = (value: number, from: string, to: string): number => {
    // Convert to Celsius first
    let celsius = value;
    switch (from) {
      case 'f': celsius = (value - 32) * 5/9; break;
      case 'k': celsius = value - 273.15; break;
    }

    // Convert from Celsius to target unit
    switch (to) {
      case 'f': return celsius * 9/5 + 32;
      case 'k': return celsius + 273.15;
      default: return celsius;
    }
  };

  const convertVolume = (value: number, from: string, to: string): number => {
    // Convert to liters first
    let liters = value;
    switch (from) {
      case 'ml': liters *= 0.001; break;
      case 'm3': liters *= 1000; break;
      case 'gal': liters *= 3.78541; break;
      case 'qt': liters *= 0.946353; break;
      case 'pt': liters *= 0.473176; break;
      case 'cup': liters *= 0.236588; break;
    }

    // Convert from liters to target unit
    switch (to) {
      case 'ml': return liters * 1000;
      case 'm3': return liters / 1000;
      case 'gal': return liters / 3.78541;
      case 'qt': return liters / 0.946353;
      case 'pt': return liters / 0.473176;
      case 'cup': return liters / 0.236588;
      default: return liters;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Unit Converter</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={convertValue} className="space-y-6">
            <div>
              <label htmlFor="conversionType" className="block text-sm font-medium text-gray-700">
                Conversion Type
              </label>
              <select
                id="conversionType"
                value={conversionType}
                onChange={(e) => setConversionType(e.target.value as ConversionType)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="length">Length</option>
                <option value="weight">Weight</option>
                <option value="temperature">Temperature</option>
                <option value="volume">Volume</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fromUnit" className="block text-sm font-medium text-gray-700">
                  From
                </label>
                <select
                  id="fromUnit"
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  {conversionTypes[conversionType].map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="toUnit" className="block text-sm font-medium text-gray-700">
                  To
                </label>
                <select
                  id="toUnit"
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  {conversionTypes[conversionType].map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="value" className="block text-sm font-medium text-gray-700">
                Value to Convert
              </label>
              <input
                type="number"
                id="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Convert
            </button>
          </form>
          
          {result !== null && (
            <div className="mt-8 p-4 bg-purple-50 rounded-md">
              <h2 className="text-xl font-semibold text-purple-800">Converted Value</h2>
              <p className="text-3xl font-bold text-purple-600 mt-2">
                {result.toFixed(4)}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                {value} {fromUnit} = {result.toFixed(4)} {toUnit}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
} 