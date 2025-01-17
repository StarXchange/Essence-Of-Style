import React from 'react';
import Title from '../components/Title';
import image3 from '../assets/image3.jpg';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="pt-10 sm:pt-14 min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-400">
      {/* Contact Us Title */}
      <div className="text-2xl text-center mb-10 border-t pt-8">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Contact Information */}
      <div className="my-10 flex flex-col sm:flex-row justify-between gap-16 px-6 sm:px-16">
        <img
          className="w-full sm:max-w-[480px] rounded-lg shadow-lg"
          src={image3}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center gap-6 sm:w-2/4 text-gray-600">
          <p className="font-semibold text-xl text-gray-800">Our Store</p>
          <p className="text-gray-500">Add an Address</p>
          <p className="text-gray-500">
            Tel: (415) 555-01334 <br />Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-800">Careers at Forever</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;