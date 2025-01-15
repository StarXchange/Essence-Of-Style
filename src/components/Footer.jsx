import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-400 text-white pt- pb-6">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-6 sm:gap-14 my-10 sm:p-6 p-4">
        
        {/* Left Section */}
        <div className="flex flex-col gap-6 sm:max-w-[480px]">
          <img src={Logo} className="mb-3 w-24" alt="Logo" />
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, voluptates accusamus quidem quos eum, provident obcaecati officiis ad, consequuntur nisi possimus eius debitis voluptatem fugiat hic labore iusto totam tempora.
          </p>
        </div>

        {/* Middle Section (Company Links) */}
        <div className="flex flex-col gap-4">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section (Contact Info) */}
        <div className="flex flex-col gap-4">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+234-814-150-1346</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full text-center border-t border-gray-300">
        <p className="py-5 text-sm">Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;