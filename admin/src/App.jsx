import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Add from './pages/add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'


const App = () => {
  
    const [token, setToken] = useState(localStorage.getItem('adminToken') ||'');
    const navigate = useNavigate();

    useEffect(() => {
      // Ensure token exists or navigate to login page
      if (!token) {
        navigate('/');
      }
    }, [token, navigate]);
  
    const handleLogout = () => {
      // Clear token from localStorage and state
      setToken('');
      localStorage.removeItem('adminToken');
  
      // Navigate back to the login page
      navigate('/');
    };


  return (
    <div className='bg-gray-50 min-h-screen'>
      {token === "" 
        ? <Login setToken={setToken}/>
        :  <>
        <Navbar onLogout={handleLogout}/> 
        <hr />
        <div className='flex w-full'>
              <Sidebar/>  
  
              <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                    <Routes>
                      <Route path='/add' element={<Add />} />
                      <Route path='/list' element={<List />} />
                      <Route path='/orders' element={<Orders />} />
                    </Routes>
              </div>
        </div>
        </>
      }
    
        
    </div>
  )
}

export default App