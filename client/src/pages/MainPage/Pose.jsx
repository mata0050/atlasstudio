import React, { useEffect } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllPose } from '../../features/pose/poseSlice';

function Pose() {
  const dispatch = useDispatch();
  const { allPoses } = useSelector((state) => state.pose);
  console.log(allPoses);

  useEffect(() => {
    dispatch(getAllPose());
  }, [dispatch]);

  return (
    <StyledPose>
      {allPoses.map((pose) => (
        <div>
          <h2>{pose.title}</h2>
          <div className='pose-container'>
            <img src={pose.pose_image} alt={pose.title} />
            {parse(pose.pose_description)}
          </div>
          {parse(pose.see_also)}
        </div>
      ))}
    </StyledPose>
  );
}

const StyledPose = styled.div``;

export default Pose;
