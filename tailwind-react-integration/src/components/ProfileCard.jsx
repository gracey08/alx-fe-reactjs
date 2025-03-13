import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-custom-light-blue rounded-lg shadow-lg p-6 w-64 flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
        {/* User Icon */}
        <div className="text-6xl text-gray-800 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Name and Title */}
        <h2 className="text-xl font-semibold text-gray-800">Your Name here</h2>
        <p className="text-sm text-gray-500 mt-1">Software Engineer</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaGithub className="text-2xl text-gray-800" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaLinkedin className="text-2xl text-gray-800" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaFacebook className="text-2xl text-gray-800" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaXTwitter className="text-2xl text-gray-800" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;