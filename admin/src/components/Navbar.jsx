import React from 'react'
import Logo from '../assets/Logo.png';

const Navbar = ({onLogout}) => {
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/logout', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',}
            });

            const data = await response.json();

            if (response.ok) {
                   // Call the onLogout function passed as a prop to clear the token and navigate
                onLogout();
            } else {
                console.log(data.message); //handle error if logout fails
            }
        } catch (error) {
            console.error('Error logging out', error);
        }
    };
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className='w-[60px] ' src={Logo} alt="" />
        <button 
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm'
        onClick={handleLogout}
        >
            Logout
            
        </button>
    </div>
  )
}

export default Navbar 