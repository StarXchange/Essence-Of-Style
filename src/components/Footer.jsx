import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={Logo} className='mb-3 w-24' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, voluptates accusamus quidem quos eum, provident obcaecati officiis ad, consequuntur nisi possimus eius debitis voluptatem fugiat hic labore iusto totam tempora.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Delivery</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+234-814-150-1346</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>

        </div>
        
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer