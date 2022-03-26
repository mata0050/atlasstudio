import React from 'react';
import styled from 'styled-components';

// Components
import Header from './Header';
import Pose from './Pose';

function MainPage() {
  return (
    <StyledMainPage>
      <Header />
      <div className='main-container'>
        <Pose />
      </div>
    </StyledMainPage>
  );
}

const StyledMainPage = styled.div`
  margin-top: 50px;
  padding: 40px;

  .main-container {
    display: flex;
  }
`;

export default MainPage;
