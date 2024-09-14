import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
        <Navbar />
      <h1 className="text-4xl font-bold text-green-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 max-w-lg text-center">
        We are a leading company providing IT solutions to various businesses worldwide, helping them achieve excellence in digital transformation.
      </p>
    </div>
  );
};

export default About;
