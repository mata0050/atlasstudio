import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// React toastify - Error message handler
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { useDispatch } from 'react-redux';
import { loadUser } from './features/auth/authSlice';

// CSS
import './css/base-style.css';

// Components
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SideNavbar from './components/SideNavbar';
import Sandbox from './pages/Sandbox';
import Search from './components/Search';
import MainPage from './pages/MainPage';

function App() {
  const dispatch = useDispatch();

  // Load all the public data
  useEffect(() => {
    dispatch(loadUser());
  }, [loadUser]);

  return (
    <div>
      <Router>
        <Navbar />
        <SideNavbar />
        <ToastContainer />
        <div className='section'>
          <Search />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/sandbox' element={<Sandbox />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
