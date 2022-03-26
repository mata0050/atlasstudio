import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <StyledHeader>
      <div className='heading box-shadow'>
        <h1>
          Welcome to <span>Wiki-yoga,</span>
        </h1>
        <span>free Yoga Encyclopedia that anyone can edit</span>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  margin-top: 40px;
  padding: 80px;

  .heading {
    padding: 20px;
    border-radius: 25px;

    h1 {
      font-size: 1.4rem;
      span {
        font-size: 1.4rem;
        color: #9d9090;
      }
    }

    span {
      font-size: 0.8rem;
      margin-top: 10px;
      display: inline-block;
    }
  }
`;

export default Header;
