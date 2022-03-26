import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  addPose as addPoseFunc,
  resetAddPose,
} from '../features/pose/poseSlice';

function Search() {
  const dispatch = useDispatch();
  const { addPose } = useSelector((state) => state.pose);
  const { title, pose_description } = useSelector(
    (state) => state.pose.addPose
  );
  const [search, setSearch] = useState('');
  const [poseState, setPoseState] = useState({});

  useEffect(() => {
    setPoseState(addPose);
  }, []);

  const styleNav = {
    background: 'var(--color-white)',
    position: 'fixed',
    top: '60px',
    zIndex: '2',
    width: 'calc(100% - 200px)',
    borderBottom: '1px solid var(--color-brown)',
    paddingBottom: '10px',
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const postPoseToDb = () => {
    if (title === '' && pose_description === null) {
      return toast.error('Please added a title and pose description');
    }
    dispatch(addPoseFunc(addPose));
    // dispatch(resetAddPose());
  };

  return (
    <div style={styleNav}>
      <StyledSearch>
        <button onClick={() => postPoseToDb()}>Save</button>
        <form onSubmit={onSubmit}>
          <div className='search'>
            <input
              type='text'
              value={search}
              placeholder='Search Wiki-yoga'
              onChange={(e) => setSearch(e.target.value)}
            />

            <i className='fa-solid fa-magnifying-glass' />
          </div>
        </form>
      </StyledSearch>
    </div>
  );
}

const StyledSearch = styled.div`
  margin: 20px 30px 0;
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 20px;
    padding: 0px 15px;
    background: #3e3e3e;
    border: none;
    border-radius: 8px;
    color: var(--color-white);
  }

  form {
    display: flex;
    justify-content: flex-end;

    .search {
      position: relative;
      input {
        height: 35px;
        width: 300px;
        border: 1px solid var(--color-darkBrown);
        border-radius: 5px;
        padding: 5px;
      }

      i {
        position: absolute;
        right: 10px;
        top: 8px;
      }
    }
  }
`;

export default Search;
