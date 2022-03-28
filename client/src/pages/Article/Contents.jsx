import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Contents() {
  return (
    <StyledContents>
      <div className='content-table box-shadow'>
        <h4>Contents</h4>

        <ul>
          <li>
            <Link to='#'>Etymology and origins</Link>
          </li>
          <li>
            <Link to='#'>Description</Link>
          </li>
          <li>
            <Link to='#'>Variations</Link>
          </li>
          <li>
            <Link to='#'>See also</Link>
          </li>
          <li>
            <Link to='#'>References</Link>
          </li>
          <li>
            <Link to='#'>Sources</Link>
          </li>
          <li>
            <Link to='#'>Further Reading</Link>
          </li>
        </ul>
      </div>
    </StyledContents>
  );
}

const StyledContents = styled.div`
  width: 30%;
  margin-right: 40px;
  height: 230px;

  .content-table {
    border-radius: 10px;
    padding: 10px;
    position: fixed;
  }

  h4 {
    margin-bottom: 20px;
  }

  ul {
    padding-left: 20px;
    li {
      list-style-type: number;
      font-size: 0.8rem;
      margin-bottom: 8px;
      a {
        font-size: 0.8rem;
        text-decoration: none;
      }
    }
  }
`;
export default Contents;
