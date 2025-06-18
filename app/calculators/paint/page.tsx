'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PaintCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [doors, setDoors] = useState('');
  const [windows, setWindows] = useState('');
  const [coats, setCoats] = useState('2');
  const [result, setResult] = useState<{
    wallArea: number;
    paintNeeded: number;
    cost: number;
  } | null>(null);

  const calculatePaint = (e: React.FormEvent) => {
    e.preventDefault();
    
    const roomLength = parseFloat(length);
    const roomWidth = parseFloat(width);
    const roomHeight = parseFloat(height);
    const numDoors = parseInt(doors) || 0;
    const numWindows = parseInt(windows) || 0;
    const numCoats = parseInt(coats);
    
    // Standard door size (2m x 1m)
    const doorArea = numDoors * 2;
    // Standard window size (1.5m x 1.2m)
    const windowArea = numWindows * 1.8;
    
    // Calculate total wall area
    const wallArea = 2 * (roomLength + roomWidth) * roomHeight - doorArea - windowArea;
    
    // Paint coverage: 1 liter covers 10 square meters
    const paintNeeded = (wallArea / 10) * numCoats;
    
    // Average paint cost: ₹600 per liter
    const cost = paintNeeded * 600;
    
    setResult({
      wallArea,
      paintNeeded,
      cost,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Paint Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={calculatePaint} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="length" className="block text-sm font-medium text-gray-700">
                  Room Length (m)
                </label>
                <input
                  type="number"
                  id="length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                  Room Width (m)
                </label>
                <input
                  type="number"
                  id="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Room Height (m)
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="doors" className="block text-sm font-medium text-gray-700">
                  Number of Doors
                </label>
                <input
                  type="number"
                  id="doors"
                  value={doors}
                  onChange={(e) => setDoors(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  min="0"
                />
              </div>
              
              <div>
                <label htmlFor="windows" className="block text-sm font-medium text-gray-700">
                  Number of Windows
                </label>
                <input
                  type="number"
                  id="windows"
                  value={windows}
                  onChange={(e) => setWindows(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  min="0"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="coats" className="block text-sm font-medium text-gray-700">
                Number of Coats
              </label>
              <select
                id="coats"
                value={coats}
                onChange={(e) => setCoats(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="1">1 Coat</option>
                <option value="2">2 Coats</option>
                <option value="3">3 Coats</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Calculate Paint Needed
            </button>
          </form>
          
          {result !== null && (
            <div className="mt-8 p-4 bg-purple-50 rounded-md">
              <h2 className="text-xl font-semibold text-purple-800">Paint Calculation Results</h2>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Wall Area:</span>
                  <span className="font-semibold">{result.wallArea.toFixed(2)} m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paint Needed:</span>
                  <span className="font-semibold">{result.paintNeeded.toFixed(2)} liters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Cost:</span>
                  <span className="font-semibold text-purple-600">₹{result.cost.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>* Based on standard paint coverage of 10 m² per liter</p>
                <p>* Average paint cost of ₹600 per liter</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
} 