import React from 'react'
import Title from '../components/Title/Title'
import image3 from '../assets/image3.jpg'

const contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={"CONTACT"} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[480px]' src={image3} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
                <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                <p className='text-gray-500'>Add an Address</p>
                <p className='text-gray-500'>Tel: (415) 555-01334 <br />Email:admin@forever.com</p>
                <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
                <p className='text-gray-500'> Learn more about our teams and job openings.</p>
                <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all-duration-500'>Explore Jobs</button>
            </div>
      </div>


    </div>
  )
}

export default contact