import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure this is the correct import for your Navbar component
import imag from '../images/imag.jpg'; // Import the background image

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${imag})`, // Setting the background image
      }}
    >
      <Navbar />

      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to Our Website
      </h1>
      <p className="text-lg text-white mb-6">
        Discover the best services tailored just for you.
      </p>
      <button
        className="bg-pink-600 rounded-md p-4 text-white font-semibold shadow-md"
        onClick={goToAbout}
      >
        Go to about page
      </button>
    </div>
  );
};

export default Home;
