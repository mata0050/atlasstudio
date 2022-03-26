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
        <div className='pose'>
          <h2>{pose.title}</h2>
          <div className='pose-container'>
            <img src={pose.pose_image} alt={pose.title} />
            <div className='description'>
              {parse(pose.pose_description)}

              <h3>Description</h3>
              {parse(pose.description)}
            </div>
          </div>
        </div>
      ))}
    </StyledPose>
  );
}

const StyledPose = styled.div`
  .pose {
    margin: 20px 0;
    border: 1px solid #ccc;
    h2 {
      background-color: var(--color-brown);
      padding: 10px;
      font-size: 1rem;
    }

    .pose-container {
      padding: 10px;
      display: flex;

      img {
        height: 150px;
        width: 250px;
        object-fit: cover;
      }

      .description {
        max-height: 150px;
        padding-left: 20px;
        overflow: hidden;
        h3 {
          margin: 10px 0;
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default Pose;
