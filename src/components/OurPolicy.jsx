import React from 'react'
import exchanging from '../assets/exchanging.png'
import returnPolicy from '../assets/return.png'
import customer from '../assets/customer.png'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base test-gray-700'>

        <div>
            <img src={exchanging} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Free Exchange</p>
            <p className='text-gray-400'>We offer free exchange policy for all our products</p>
            </div>
        <div>
            <img src={returnPolicy} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We procide 7 days free return policy</p>
            </div>
        <div>
            <img src={customer} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide best customer support</p>
            </div>
    </div>
  )
}

export default OurPolicy