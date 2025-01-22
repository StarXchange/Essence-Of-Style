import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Add logic here for handling form submission (e.g., API call)
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col gap-6 pt-10 sm:pt-14 min-h-[50vh] bg-gradient-t">
      {/* Title Section */}
      <div className="text-center py-8 px-4 bg-white rounded-lg shadow-md">
        <p className="text-2xl sm:text-3xl font-bold text-gray-800">
          Subscribe now & get 20% off
        </p>
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          Stay updated with our latest news and exclusive offers. Sign up for
          our newsletter today and get a 20% discount on your next purchase!
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center px-4 pb-5">
        <form
          onSubmit={onSubmitHandler}
          className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        >
          <input
            className="w-full sm:flex-1 outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterBox;
