import React, { useState } from 'react'

const Login = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

            const onSubmitHandler = async (e) => {
                e.preventDefault();  //prevent page from refresh 
                try {
                const response = await fetch('http://localhost:8080/api/admin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                    });
                    const data = await response.json();
                    if (response.ok) {
                        setToken(data.token); // Save token in state
                        localStorage.setItem('adminToken', data.token); // Optional: Store in localStorage
                    } else {
                        setError(data.message); // Display error message
                    }
                } catch (error) {
                    console.error('Login failed:', error);
                    setError('An error occurred while trying to login.'); // Display generic error message
                }
            };

return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shawdow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
            {error && <div className='text-red-500 text-xs'>{error}</div>}
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' 
                    type="text" 
                    placeholder="Enter Email" 
                    required/>
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' 
                    type="password" 
                    placeholder="Password" 
                    required/>
                </div>
                <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type="submit"> Login </button>
            </form>
        </div>
    </div>
)
}

export default Login