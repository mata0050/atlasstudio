import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// icon
import logo from '../images/logo__atlas-studio-vert.png';

function SideNavbar() {
  return (
    <StyledNav>
      <img src={logo} alt='Wiki-yoga' />
      <h1>Wiki-yoga</h1>
      <span>Free Yoga Encyclopedia</span>
      <ul>
        <li>
          <Link to='/'>Main Page</Link>
        </li>
        <li >
          <Link style={{color: 'red'}} to='/about'>About Wiki-Yoga</Link>
        </li>
        <li>
          <Link style={{color: 'red'}}  to='/contact-us'>Contact Us</Link>
        </li>
        <li>
          <Link style={{color: 'red'}}  to='/donate'>Donate</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  margin-top: 60px;
  position: fixed;
  height: calc(100vh - 60px);
  background: var(--color-brown);
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 30px;
    width: 100px;
  }

  h1 {
    margin-top: 15px;
  }

  span {
    font-size: 0.8rem;
  }

  ul {
    margin-top: 50px;
    li {
      list-style: none;
      margin-bottom: 10px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: var(--color-darkBrown);
      }
      a:hover {
        color: var(--color-lightBrown);
      }
    }
  }
`;
export default SideNavbar;
