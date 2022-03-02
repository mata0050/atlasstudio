import React from 'react';
import styled from 'styled-components';

// Components
import DescriptionForm from './DescriptionForm';
import EtymologyForm from './EtymologyForm';
import HeadingForm from './HeadingForm';
import ReferenceForm from './ReferenceForm';
import SeeAlsoForm from './SeeAlsoForm';
import SourcesForm from './SourcesForm';
import VariationsForm from './VariationsForm';

function Sandbox() {
  return (
    <StyledSandbox>
      <HeadingForm />
      <EtymologyForm />
      <DescriptionForm />
      <VariationsForm />
      <SeeAlsoForm />
      <ReferenceForm />
      <SourcesForm />
    </StyledSandbox>
  );
}

const StyledSandbox = styled.div`
  margin-top: 80px;
  padding: 30px;
`;

export default Sandbox;
