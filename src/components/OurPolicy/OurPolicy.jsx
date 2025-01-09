import React from 'react'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs  sm:text-sm md:text-base text-gray-700'>
        
        <div>
            {/* add an icon  */}
            <p className='font-semibold'>OUR POLICY</p>
            <p className='text-gray-400'>We sell only the best mirrors and furnitures for your dream house</p>
        </div>

        <div>
            {/* add an icon for quality  */}
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return Policy</p>
        </div>

        <div>
            {/* add an icon for support  */} 
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>

    </div>
  )
}

export default OurPolicy

