import React, { useEffect } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllPose } from '../../features/pose/poseSlice';

function Pose() {
  const dispatch = useDispatch();
  const { allPoses } = useSelector((state) => state.pose);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPose());
  }, [dispatch]);

  return (
    <StyledPose>
      {allPoses.map((pose) => (
        <div className='pose' key={pose.id}>
          <h2>{pose.title}</h2>
          <div className='pose-container'>
            <img src={pose.pose_image} alt={pose.title} />
            <div className='description'>
              {parse(pose.pose_description)}

              <h3>Description</h3>
              {parse(pose.description)}
            </div>
          </div>
          <button
            onClick={() => navigate(`/article/${pose.id}`, { state: pose })}
          >
            Full Article
          </button>
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

    p {
      font-size: 0.95rem;
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
        max-height: 155px;
        padding-left: 20px;
        overflow: hidden;
        h3 {
          margin: 10px 0;
          font-size: 1.1rem;
        }
      }
    }

    button {
      margin: 0 10px 10px 10px;
      font-size: 1rem;
      padding: 5px 15px;
      cursor: pointer;
      background-color: #f1f0f0;
      border-radius: 8px;
      border: 0.5px solid;

      :hover {
        background-color: #ddd6d6;
      }
    }
  }
`;

export default Pose;
