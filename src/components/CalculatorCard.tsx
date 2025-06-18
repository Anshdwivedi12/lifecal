'use client';

import React from 'react';
import Link from 'next/link';

interface CalculatorCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({
  title,
  description,
  href,
  icon
}) => {
  return (
    <Link href={href}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CalculatorCard; 