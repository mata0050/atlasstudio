import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllPose } from '../../features/pose/poseSlice';

function RandomPose() {
  const dispatch = useDispatch();
  const { allPoses } = useSelector((state) => state.pose);
  const [poseOfDay, setPoseOfDay] = useState([]);

  useEffect(() => {
    dispatch(getAllPose());
  }, [dispatch]);

  useEffect(() => {
    if (allPoses.length !== 0) {
      const randomNumber = Math.floor(Math.random() * allPoses.length + 1);
      setPoseOfDay(allPoses[randomNumber - 1]);
    }
  }, [allPoses]);

  return (
    <StyledPose>
      <h2>Pose of The Day</h2>
      {poseOfDay.length !== 0 && (
        <div className='pose'>
          <h3>{poseOfDay.title}</h3>
          <div className='pose-container'>
            <img src={poseOfDay.pose_image} alt={poseOfDay.title} />
            <div className='description'>
              {parse(poseOfDay.pose_description)}

              <h4>Description</h4>
              {parse(poseOfDay.description)}
            </div>
          </div>
          <button>Full Article</button>
        </div>
      )}
    </StyledPose>
  );
}

const StyledPose = styled.div`
  max-width: 30%;
  margin-left: 20px;

  h2 {
    margin-top: 20px;
    text-align: center;
  }
  .pose {
    margin-top: 20px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      background-color: var(--color-brown);
      padding: 10px;
      font-size: 1rem;
      width: 100%;
    }

    p {
      font-size: 0.95rem;
    }

    .pose-container {
      padding: 10px;
      /* display: flex; */

      img {
        height: 150px;
        width: 100%;
        object-fit: contain;
        margin-bottom: 10px;
      }

      .description {
        padding: 10px;
        height: 183px;
        overflow: hidden;
        h4 {
          margin: 10px 0;
          font-size: 1.1rem;
        }
      }
    }

    button {
      margin: 18px 0px;
      font-size: 1rem;
      padding: 10px 15px;
      cursor: pointer;
      background-color: #53473d;
      border-radius: 8px;
      border: 0.5px solid;
      width: 90%;
      color: #fff;

      :hover {
        background-color: #ddd6d6;
        color: var(--color-black);
      }
    }
  }
`;

export default RandomPose;
