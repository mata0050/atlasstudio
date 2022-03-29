import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  // const styleMobileNav = { fontSize: 45, marginRight: '45px', padding: '5px' };
  const styleNav = {
    background: 'var(--color-lightGrey)',
    position: 'sticky',
    top: '0px',
    zIndex: '999',
    borderBottom: '5px solid var(--color-white)',
  };

  const handleClick = () => setShowNav(!showNav);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  console.log(isAuthenticated)

  const guestLinks = (
    <ul id={showNav ? '' : 'hide'}>
      <li>
        <NavLink to='/register'>Create account</NavLink>
      </li>
      <li>
        <NavLink to='/login'>Log in</NavLink>
      </li>
    </ul>
  );

  const authLinks = (
    <ul id={showNav ? '' : 'hide'}>
      <li>
        <NavLink to='/sandbox'>Sandbox</NavLink>
      </li>
      <li>
        <NavLink style={{color: 'red'}} to='/contributions'>Contributions</NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={() => onLogout()}>
          Logout
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div style={styleNav}>
      <div className='section-max-1380px'>
        <StyledNav>
          <div
            onClick={handleClick}
            className='mobile-navbar'
            id={showNav ? '' : 'active'}
          >
            {showNav ? (
              <i className='far fa-window-close'></i>
            ) : (
              <i className='fas fa-bars'></i>
            )}
          </div>

          <nav>{!isAuthenticated ? guestLinks : authLinks}</nav>
        </StyledNav>
      </div>
    </div>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
  background: var(--color-lightGrey);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  .mobile-navbar {
    display: none;
  }

  /* #active {
    background: #f0efef;
  } */

  .mobileBtn {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    cursor: pointer;
    list-style: none;

    a,
    span {
      font-size: 1.2rem;
      text-decoration: none;
      color: var(--color-darkGrey);
      padding: 5px;
      margin-right: 30px;
    }

    a:hover {
      color: var(--color-orange);
    }
  }

  /* media queries */
  @media only screen and (max-width: 880px) {
    .mobileBtn {
      display: block;
    }
    .mobile-navbar {
      display: block;
      margin-right: 30px;
    }

    i {
      font-size: 1.8rem;
    }

    #hide {
      display: none;
    }

    ul {
      flex-direction: column;
      background: var(--color-lightGrey);
      position: absolute;
      right: 55px;
      top: 95px;
      padding: 10px;

      li {
        padding: 15px;
        margin: 10px 0;
      }
      li:hover {
        width: 100%;
        text-align: center;
        background: var(--color-orange);
      }

      a {
        padding: 15px;
      }

      a:hover,
      span:hover {
        color: var(--color-darkGrey);
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .mobile-navbar {
      width: 50px;
      margin-right: 30px;
    }

    ul {
      top: 90px;
      right: 30px;

      li {
        padding: 8px;
        margin: 10px 0;
      }

      a {
        font-size: 1.2rem;
      }
    }
  }

  @media only screen and (max-width: 410px) {
    .mobile-navbar {
      width: 50px;
      margin-right: 10px;
    }

    ul {
      top: 90px;
      right: 10px;
    }
  }
`;

export default Navbar;
