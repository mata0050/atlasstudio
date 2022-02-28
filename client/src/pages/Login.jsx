import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';

// Component
import Spinner from '../components/Spinner';

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
    <StyledLogin>
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
    </StyledLogin>
  );
}
const StyledLogin = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  h2 {
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
  }

  .login {
    width: 400px;
    margin-inline: auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
  }

  p {
    font-size: 1rem;
  }

  form {
    margin-top: 20px;
    label {
      display: none;
    }
    input {
      height: 45px;
      width: 100%;
      margin-bottom: 15px;
      padding-left: 8px;
      border: none;
      border-bottom: 1px solid #ccc;
    }

    button {
      margin-top: 20px;
      width: 100%;
      border-radius: 3px;
      font-size: 1.1rem;
      border: none;
      background: var(--color-darkBrown);
      color: var(--color-white);
      padding: 10px 25px;
    }
  }

  .footer {
    display: block;
    margin-top: 20px;
    font-size: 0.9rem;
    text-align: center;
    a {
      text-decoration: none;
      color: var(--color-black);
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;

export default Login;
