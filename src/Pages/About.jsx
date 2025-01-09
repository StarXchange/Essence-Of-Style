import React from 'react'
import Title from '../components/Title/Title'
import NewsletterBox from '../components/NewletterBox/NewsletterBox'
import image2 from '../assets/image2.jpg'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={image2} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit maiores repellat ab ducimus, veniam error repudiandae magnam, nisi odit possimus doloribus excepturi iusto, dolorum molestias. Delectus corporis consectetur quod accusantium.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi excepturi delectus voluptas dicta. Rerum aliquid explicabo eaque aperiam provident magnam, tempore excepturi perferendis quia, ex laboriosam optio, doloribus minus.</p>
              
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi est repellendus debitis vitae suscipit nam dignissimos, molestias nobis deleniti eius ducimus! Amet nisi odit suscipit vitae quaerat ratione omnis eveniet!</p>
          </div>
      </div>

      <div className='text-xl py-4'> 
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem aliquam sed quaerat fugiat eum doloribus quae sint molestiae nihil quia accusantium, beatae cum ducimus ut perferendis dolore! Earum, facere.</p>
            </div>
            <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
                <b>Installment</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem aliquam sed quaerat fugiat eum doloribus quae sint molestiae nihil quia accusantium, beatae cum ducimus ut perferendis dolore! Earum, facere.</p>
            </div>
            <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem aliquam sed quaerat fugiat eum doloribus quae sint molestiae nihil quia accusantium, beatae cum ducimus ut perferendis dolore! Earum, facere.</p>
            </div>
      </div>
 
        <NewsletterBox/> 
    </div>
  )
}

export default About