import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import image2 from '../assets/image2.jpg';

const About = () => {
  return (
    <div className="pt-10 sm:pt-14 min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-400">
      {/* About Us Title */}
      <div className="text-2xl text-center mb-10 border-t pt-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About Content */}
      <div className="my-10 flex flex-col sm:flex-row justify-between gap-16 px-6 sm:px-16">
        <img src={image2} alt="About Us" className="w-full sm:w-1/2 rounded-lg shadow-lg" />
        <div className="flex flex-col justify-center gap-6 sm:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit maiores repellat ab
            ducimus, veniam error repudiandae magnam, nisi odit possimus doloribus excepturi iusto,
            dolorum molestias. Delectus corporis consectetur quod accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi excepturi
            delectus voluptas dicta. Rerum aliquid explicabo eaque aperiam provident magnam, tempore
            excepturi perferendis quia, ex laboriosam optio, doloribus minus.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi est repellendus
            debitis vitae suscipit nam dignissimos, molestias nobis deleniti eius ducimus! Amet nisi
            odit suscipit vitae quaerat ratione omnis eveniet!
          </p>
        </div>
      </div>

      {/* Why Choose Us Title */}
      <div className="text-xl py-4 mb-6">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      {/* Why Choose Us Details */}
      <div className="flex flex-col sm:flex-row justify-between gap-6 px-6 sm:px-16">
        <div className="border px-6 sm:px-10 py-10 flex flex-col gap-5 bg-white rounded-lg shadow-lg">
          <b className="text-gray-800">Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem aliquam sed
            quaerat fugiat eum doloribus quae sint molestiae nihil quia accusantium, beatae cum
            ducimus ut perferendis dolore! Earum, facere.
          </p>
        </div>
        <div className="border px-6 sm:px-10 py-10 flex flex-col gap-5 bg-white rounded-lg shadow-lg">
          <b className="text-gray-800">Installment</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem aliquam sed
            quaerat fugiat eum doloribus quae sint molestiae nihil quia accusantium, beatae cum
            ducimus ut perferendis dolore! Earum, facere.
          </p>
        </div>
        <div className="border px-6 sm:px-10 py-10 flex flex-col gap-5 bg-white rounded-lg shadow-lg">
          <b className="text-gray-800">Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem aliquam sed
            quaerat fugiat eum doloribus quae sint molestiae nihil quia accusantium, beatae cum
            ducimus ut perferendis dolore! Earum, facere.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default About;