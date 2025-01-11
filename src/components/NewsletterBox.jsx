import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus tenetur exercitationem possimus, doloremque culpa autem minus aut ea, asperiores recusandae. Blanditiis quod non sequi provident dicta officia alias laborum.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 hover:scale-110 transition ease-in-out'>
            <input className='w-full sm:flex-1 outline-none' type="email"
            placeholder="Enter your email" required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>    </form>
    </div>
  )
}

export default NewsLetterBox