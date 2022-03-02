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
        <ToastContainer />
        <div className='section-max-1380px'>
          <Routes>
            <Route path='/' element={<h1>home</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
