'use client';

import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';

const timeZones = [
  'UTC',
  'America/New_York',
  'America/Los_Angeles',
  'America/Chicago',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Asia/Dubai',
  'Australia/Sydney',
  'Pacific/Auckland',
];

export default function TimeZoneConverter() {
  const [fromTimeZone, setFromTimeZone] = useState('UTC');
  const [toTimeZone, setToTimeZone] = useState('UTC');
  const [fromTime, setFromTime] = useState('');
  const [convertedTime, setConvertedTime] = useState<string | null>(null);

  useEffect(() => {
    // Set initial time to current time in UTC
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    setFromTime(`${hours}:${minutes}`);
  }, []);

  const convertTime = () => {
    if (!fromTime) return;

    try {
      // Parse the input time
      const [hours, minutes] = fromTime.split(':').map(Number);
      
      // Create a date object in the source timezone
      const date = new Date();
      date.setUTCHours(hours, minutes);

      // Convert to target timezone
      const options: Intl.DateTimeFormatOptions = {
        timeZone: toTimeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };

      const converted = new Intl.DateTimeFormat('en-US', options).format(date);
      setConvertedTime(converted);
    } catch (error) {
      console.error('Error converting time:', error);
      setConvertedTime('Error converting time');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center mb-8">
            <FaGlobe className="h-12 w-12 text-blue-500" />
            <h1 className="ml-4 text-3xl font-bold text-gray-900 dark:text-white">
              Time Zone Converter
            </h1>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  From Time Zone
                </label>
                <select
                  value={fromTimeZone}
                  onChange={(e) => setFromTimeZone(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white"
                >
                  {timeZones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  To Time Zone
                </label>
                <select
                  value={toTimeZone}
                  onChange={(e) => setToTimeZone(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-blue-500 focus:ring-blue-500 
                           dark:bg-gray-700 dark:text-white"
                >
                  {timeZones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Time (24-hour format)
              </label>
              <input
                type="time"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                         shadow-sm focus:border-blue-500 focus:ring-blue-500 
                         dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button
              onClick={convertTime}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Convert
            </button>

            {convertedTime && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
                <h2 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-4">
                  Converted Time
                </h2>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {convertedTime}
                  </p>
                  <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                    {toTimeZone}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 