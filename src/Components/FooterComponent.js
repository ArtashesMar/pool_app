import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../Styles/Footer.css"
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r ">
      <div className="container ">
        {/* Feedback Section */}
        <div className="w-1/3">
          <h3 className="text-lg font-semibold ">Feedback</h3>
          <textarea
            className="w-full "
            rows="3"
            placeholder="Write your feedback..."
          ></textarea>
          <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition duration-300">
            Submit
          </button>
        </div>

        {/* Empty Space */}
        <div className="w-1/3"></div>

        {/* Social Icons */}
        <div className="w-1/3 flex justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 text-3xl transition duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-3xl transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-400 text-3xl transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 text-3xl transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

