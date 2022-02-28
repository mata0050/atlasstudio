import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';

// Component
import Spinner from '../components/Spinner';

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
    <StyledRegister>
      <div className='login'>
        <section>
          <h1>Register</h1>
          <p>Please create an account</p>
        </section>

        <section>
          <form onSubmit={onSubmit}>
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

          <span>
            If you have an account,
            <Link to='/login'> Login</Link>
          </span>
        </section>
      </div>
    </StyledRegister>
  );
}

const StyledRegister = styled.div`
  margin-top: 60px;

  .login {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
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
    }

    button {
      margin-top: 20px;
      width: 100%;
      border-radius: 10px;
      font-size: 1.1rem;
      background: var(--color-orange);
      color: var(--color-white);
    }
  }
  section {
    span {
      display: block;
      margin-top: 20px;
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

export default Register;
