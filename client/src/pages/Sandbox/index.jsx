import React from 'react';
import styled from 'styled-components';
import EtymologyForm from './EtymologyForm';
import HeadingForm from './HeadingForm';

function Sandbox() {
  return (
    <StyledSandbox>
      <HeadingForm />
      <EtymologyForm />
    </StyledSandbox>
  );
}

const StyledSandbox = styled.div`
  margin-top: -40px;
  padding: 30px;
`;

export default Sandbox;
