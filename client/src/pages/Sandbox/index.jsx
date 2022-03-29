import React, { useEffect } from 'react';
import styled from 'styled-components';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { onChangeAddPose } from '../../features/pose/poseSlice';

// Components
import DescriptionForm from './DescriptionForm';
import EtymologyForm from './EtymologyForm';
import FurtherReadingForm from './FurtherReadingForm';
import HeadingForm from './HeadingForm';
import ReferenceForm from './ReferenceForm';
import SeeAlsoForm from './SeeAlsoForm';
import SourcesForm from './SourcesForm';
import VariationsForm from './VariationsForm';

function Sandbox() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  useEffect(() => {
    dispatch(onChangeAddPose({ author_id: user.id }));
  }, [dispatch, user.id]);
  return (
    <StyledSandbox>
      <p className='red' style={{ marginBottom: '20px' }}>
        Need to work on clear the form after saving a pose and redirect user to
        contributions{' '}
      </p>
      <HeadingForm />
      <EtymologyForm />
      <DescriptionForm />
      <VariationsForm />
      <SeeAlsoForm />
      <ReferenceForm />
      <SourcesForm />
      <FurtherReadingForm />
    </StyledSandbox>
  );
}

const StyledSandbox = styled.div`
  margin-top: 80px;
  padding: 40px;
`;

export default Sandbox;
