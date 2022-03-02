import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';

import StyledAuth from './StyledAuth'


// Component
import Spinner from '../../components/Spinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
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
    dispatch(login(formData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledAuth>
      <div className='login box-shadow'>
        <h2>Welcome to Wiki Yoga</h2>

        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'> Email</label>
            <input
              className='form-control'
              type='email'
              name='email'
              id='Email'
              placeholder='Email'
              autoComplete='off'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password1'> Password</label>
            <input
              className='form-control'
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              autoComplete='off'
              value={password}
              onChange={onChange}
              required
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-primary start-btn'>
              Sign In
            </button>
          </div>
        </form>
        <span className='footer'>
          <Link to='/forget-password'> Forgot Password?</Link>
          <Link to='/register'> Create account</Link>
        </span>
      </div>
    </StyledAuth>
  );
}



export default Login;
