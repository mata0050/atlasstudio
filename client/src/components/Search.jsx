import React, { useState } from 'react';
import styled from 'styled-components';

function Search() {
  const [search, setSearch] = useState('');

  const styleNav = {
    background: 'var(--color-white)',
    position: 'fixed',
    top: '60px',
    zIndex: '2',
    width: 'calc(100% - 200px)',
    borderBottom: '1px solid var(--color-brown)',
    paddingBottom: '10px',
  };

  return (
    <div style={styleNav}>
      <StyledSearch>
        <form onSubmit=''>
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
