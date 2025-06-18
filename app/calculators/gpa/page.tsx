'use client';

import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

interface Course {
  name: string;
  credits: number;
  grade: string;
}

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { name: '', credits: 0, grade: 'A' },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  const gradePoints: { [key: string]: number } = {
    'A+': 10,
    'A': 9,
    'B+': 8,
    'B': 7,
    'C+': 6,
    'C': 5,
    'D': 4,
    'F': 0,
  };

  const addCourse = () => {
    setCourses([...courses, { name: '', credits: 0, grade: 'A' }]);
  };

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const updateCourse = (index: number, field: keyof Course, value: string | number) => {
    const newCourses = [...courses];
    newCourses[index] = { ...newCourses[index], [field]: value };
    setCourses(newCourses);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach(course => {
      const credits = Number(course.credits);
      const points = gradePoints[course.grade] || 0;
      totalCredits += credits;
      totalPoints += credits * points;
    });

    const calculatedGPA = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setGpa(Number(calculatedGPA.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center mb-8">
            <FaGraduationCap className="h-12 w-12 text-blue-500" />
            <h1 className="ml-4 text-3xl font-bold text-gray-900 dark:text-white">
              GPA Calculator
            </h1>
          </div>

          <div className="space-y-6">
            {courses.map((course, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Course Name
                  </label>
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(index, 'name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                             shadow-sm focus:border-blue-500 focus:ring-blue-500 
                             dark:bg-gray-700 dark:text-white"
                    placeholder="Course name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Credits
                  </label>
                  <input
                    type="number"
                    value={course.credits}
                    onChange={(e) => updateCourse(index, 'credits', Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                             shadow-sm focus:border-blue-500 focus:ring-blue-500 
                             dark:bg-gray-700 dark:text-white"
                    min="0"
                    max="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Grade
                  </label>
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(index, 'grade', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                             shadow-sm focus:border-blue-500 focus:ring-blue-500 
                             dark:bg-gray-700 dark:text-white"
                  >
                    {Object.keys(gradePoints).map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => removeCourse(index)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 
                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex space-x-4">
              <button
                onClick={addCourse}
                className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Add Course
              </button>

              <button
                onClick={calculateGPA}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Calculate GPA
              </button>
            </div>

            {gpa !== null && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
                <h2 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-4">
                  GPA Result
                </h2>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {gpa.toFixed(2)}
                  </p>
                  <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                    {gpa >= 9.5 ? 'Excellent!' : 
                     gpa >= 8.5 ? 'Great job!' : 
                     gpa >= 7.5 ? 'Good work!' : 
                     gpa >= 6.5 ? 'Keep improving!' : 
                     'Needs improvement'}
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