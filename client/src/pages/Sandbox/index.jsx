import React from 'react';
import styled from 'styled-components';
import HeadingForm from './HeadingForm';

function Sandbox() {
  return (
    <StyledSandbox>
      <HeadingForm />
    </StyledSandbox>
  );
}

const StyledSandbox = styled.div`
  padding: 30px;
`;

export default Sandbox;
