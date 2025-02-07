import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';

const PlaceOrder = () => {
  const navigate = useNavigate();

  const [method, setMethod] = useState('cod');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    paymentMethod: '',
  });

  const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
  };

  const handlePlaceOrder = async () => {
    try {
      
      const orderData = {
        userid: '',
        items: [],
        amount: '',
        address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.zip}, ${formData.country}`,
        phone: formData.phone,
        paymentMethod: method === 'cod' ? 'Cash': method,
      }

      const response = await fetch ('http://localhost:8080/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if(response.ok){
        navigate('/orders');
      }else{
        const error =await response.json();
        console.error('Error placing order:', error.message);
      }


    } catch (error) {
      console.error('Error placing order:', error.message);
    }
  };

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
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="First Name"
              required
            />
            <input
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Home Address"
            required
          />
          <div className="flex gap-3">
            <input
              name='city'
              value={formData.city}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="City"
              required
            />
            <input
              name='state'
              value={formData.state}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="State"
              required
            />
          </div>
          <div className="flex gap-3">
            <input
              name='zip'
              value={formData.zip}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Zipcode"
              required
            />
            <input
              name='country'
              value={formData.country}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Country"
              required
            />
          </div>
          <input
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Phone"
            required
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
    onClick={handlePlaceOrder}
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