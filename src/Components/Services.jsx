import React from 'react';
import Navbar from './Navbar';

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
        <Navbar />
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Our Services</h1>
      <ul className="list-disc text-lg text-gray-700">
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>Cloud Solutions</li>
      </ul>
    </div>
  );
};

export default Services;
