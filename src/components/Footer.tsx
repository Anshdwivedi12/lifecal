'use client';

import React from 'react';
import Link from 'next/link';
import { FaLink, FaCode, FaGithub, FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} LifeCal. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400 mb-4">
            Your trusted companion for life&apos;s calculations
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="https://anshdwivedi.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 flex items-center">
              <FaLink className="mr-1" /> My Website
            </Link>
            <Link href="https://leetcode.com/u/anshdubeyjii/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 flex items-center">
              <FaCode className="mr-1" /> My LeetCode
            </Link>
            <Link href="https://github.com/Anshdwivedi12" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 flex items-center">
              <FaGithub className="mr-1" /> My GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/anshdwivedi-/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 flex items-center">
              <FaLinkedin className="mr-1" /> My LinkedIn
            </Link>
            <Link href="https://www.instagram.com/anshdwivedi.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 flex items-center">
              <FaInstagram className="mr-1" /> My Instagram
            </Link>
            <span className="text-gray-300 flex items-center">
              <FaPhone className="mr-1" /> +91 8112721689
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 