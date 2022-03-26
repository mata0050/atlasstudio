import React from 'react';
import styled from 'styled-components';

// Components
import Header from './Header';
import Pose from './Pose';
import RandomPose from './RandomPose';

function MainPage() {
  return (
    <StyledMainPage>
      <Header />
      <div className='main-container'>
        <Pose />
        <RandomPose />
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
