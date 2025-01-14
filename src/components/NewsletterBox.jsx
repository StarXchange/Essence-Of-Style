import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Add logic here for handling form submission (e.g., API call)
    console.log("Form submitted");
  };

  return (
    <div className="text-center px-4">
      {/* Title */}
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>

      {/* Description */}
      <p className="text-gray-500 mt-3 leading-relaxed">
        Stay updated with our latest news and exclusive offers. Sign up for our
        newsletter today and get a 20% discount on your next purchase!
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-lg p-1 hover:shadow-lg transition-all ease-in-out"
      >
        <input
          className="w-full sm:flex-1 outline-none px-3 py-2 text-sm rounded-lg"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;