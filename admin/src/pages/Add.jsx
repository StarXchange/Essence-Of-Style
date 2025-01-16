import React from 'react';
import upload from '../assets/upload.png'
const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className="mb-2 text-sm text-gray-700">Upload Image</p>
        <div className="relative inline-block cursor-pointer">
          <label htmlFor="images" className="block w-[200px] h-[200px] border border-dashed border-gray-400 rounded p-5 bg-gray-100">
            <img
            // className='w-[150px] px-2'
              src={upload}
              alt="upload icon"
            />
            <input type="file" id="images" hidden />
          </label>
        </div>
      </div>

    <div>
      <p>Product name</p>
      <input className='w-full max-w-[500px] px-3 py-2'  type="text" placeholder='Type here' required />
    </div>
    

    </form>
  );
};

export default Add;
