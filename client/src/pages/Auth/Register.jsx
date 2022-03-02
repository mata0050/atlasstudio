import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';

import StyledAuth from './StyledAuth';

// Component
import Spinner from '../../components/Spinner';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((preState) => ({ ...preState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      return toast.error('Passwords do not match');
    }

    const userData = {
      first_name,
      last_name,
      email,
      password,
    };

    dispatch(register(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledAuth>
      <div className='login box-shadow'>
        <h2>Register</h2>

        <form onSubmit={onSubmit}>
          <div className='flex'>
            <label htmlFor='firstName'> First Name</label>
            <input
              className='form-control'
              type='text'
              name='first_name'
              id='firstName'
              placeholder='First Name'
              value={first_name}
              onChange={onChange}
              required
            />

            <label htmlFor='lastName'> Last Name</label>
            <input
              className='form-control'
              type='text'
              name='last_name'
              id='lastName'
              placeholder='lastName'
              value={last_name}
              onChange={onChange}
              required
            />
          </div>

          <label htmlFor='email'> Email</label>
          <input
            className='form-control'
            type='email'
            name='email'
            id='Email'
            placeholder='Email'
            value={email}
            onChange={onChange}
            required
          />

          <label htmlFor='password1'> Password</label>
          <input
            className='form-control'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={onChange}
            required
          />

          <label htmlFor='password2'>Confirm Password</label>
          <input
            className='form-control'
            type='password'
            name='password2'
            id='password2'
            placeholder='Confirm Password'
            value={password2}
            onChange={onChange}
          />

          <button type='submit' className='btn btn-primary start-btn'>
            Register
          </button>
        </form>

        <span className='footer'>
          <Link to='/login'> Already have an accounts? Sign in</Link>
        </span>
      </div>
    </StyledAuth>
  );
}

export default Register;
