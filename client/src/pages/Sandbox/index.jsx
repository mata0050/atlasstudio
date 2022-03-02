import React from 'react';
import styled from 'styled-components';

// Components
import DescriptionForm from './DescriptionForm';
import EtymologyForm from './EtymologyForm';
import HeadingForm from './HeadingForm';
import SeeAlsoForm from './SeeAlsoForm';
import VariationsForm from './VariationsForm';

function Sandbox() {
  return (
    <StyledSandbox>
      <HeadingForm />
      <EtymologyForm />
      <DescriptionForm />
      <VariationsForm />
      <SeeAlsoForm />
    </StyledSandbox>
  );
}

const StyledSandbox = styled.div`
  margin-top: -40px;
  padding: 30px;
`;

export default Sandbox;
