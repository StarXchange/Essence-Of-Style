import React from "react";
import exchanging from "../assets/exchanging.png";
import returnPolicy from "../assets/return.png";
import customer from "../assets/customer.png";

const OurPolicy = () => {
  return (
    <div className="flex flex-col gap-8 pt-10 sm:pt-14 min-h-[50vh] bg-gradient-to-r from-blue-50 to-blue-400">
      {/* Title Section */}
      <div className="text-center py-8 px-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Our Policy
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          We value our customers and ensure a seamless shopping experience with
          our flexible policies and excellent support.
        </p>
      </div>

      {/* Policies Section */}
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-4 text-center px-4">
        {/* Policy 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105">
          <img src={exchanging} className="w-16 m-auto mb-4" alt="Exchanging Policy" />
          <p className="font-semibold text-gray-800 text-lg">Free Exchange</p>
          <p className="mt-2 text-gray-600 text-sm">
            We offer free exchange policy for all our products.
          </p>
        </div>

        {/* Policy 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105">
          <img src={returnPolicy} className="w-16 m-auto mb-4" alt="Return Policy" />
          <p className="font-semibold text-gray-800 text-lg">7 Days Return Policy</p>
          <p className="mt-2 text-gray-600 text-sm">
            We provide a 7-day free return policy.
          </p>
        </div>

        {/* Policy 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105">
          <img src={customer} className="w-16 m-auto mb-4" alt="Customer Support" />
          <p className="font-semibold text-gray-800 text-lg">Best Customer Support</p>
          <p className="mt-2 text-gray-600 text-sm">
            We provide the best customer support to assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;