import React, { useState } from 'react';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] border-t bg-gradient-to-r from-blue-50 to-blue-400">
      {/*------- Left Side----- */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px] p-6 rounded-lg  shadow-lg">
        <div className="text-2xl font-semibold text-gray-700 mb-4">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        
        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Home Address"
          />
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="City"
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="Zipcode"
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Phone"
          />
        </div>
      </div>

      {/**------- Right Side----- */}
      <div className="flex flex-col w-full sm:max-w-[480px] p-6 rounded-lg shadow-lg">
        <CartTotal />
        
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          
          {/* PAYMENT METHOD SELECTION */}
          <div className="flex flex-col gap-4 lg:flex-row mt-6">
            {/* Visa */}
            <div
              onClick={() => setMethod('visa')}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-gray-100 shadow-md ${
                method === 'visa' ? 'bg-blue-100 border-blue-400' : 'border-gray-300'
              }`}
            >
              <img className="h-8" src={visa} alt="Visa" />
              <p className="text-gray-700 font-medium">Visa</p>
            </div>

            {/* Mastercard */}
            <div
              onClick={() => setMethod('mastercard')}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-gray-100 shadow-md ${
                method === 'mastercard' ? 'bg-blue-100 border-blue-400' : 'border-gray-300'
              }`}
            >
              <img className="h-8" src={mastercard} alt="Mastercard" />
              <p className="text-gray-700 font-medium">Mastercard</p>
            </div>

            {/* Cash on Delivery */}
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-gray-100 shadow-md ${
                method === 'cod' ? 'bg-blue-100 border-blue-400' : 'border-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 ${
                  method === 'cod' ? 'bg-gray-700 border-gray-700' : 'border-gray-300'
                }`}
              />
              <p className="text-gray-700 font-medium">Cash on Delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-3 flex justify-end'>
  <button
    onClick={() => navigate('/orders')}
    className='text-black px-8 py-2 text-sm bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all transform hover:scale-105'
  >
    <b>PLACE ORDER</b>
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;