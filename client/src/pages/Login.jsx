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
      <div className='login'>
        <section>
          <h1>Login</h1>
        </section>

        <section>
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
                Login
              </button>
            </div>
          </form>
          <span>
            If you don't have an account,
            <Link to='/register'> register an account</Link>
          </span>
        </section>
      </div>
    </StyledLogin>
  );
}
const StyledLogin = styled.div`
  margin-top: 60px;

  .login {
    height: 60vh;
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

export default Login;
