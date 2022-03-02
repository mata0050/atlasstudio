import React, { useState } from 'react';
import styled from 'styled-components';

function Search() {
  const [search, setSearch] = useState('');
  return (
    <StyledSearch>
      <form onSubmit=''>
        <input
          type='text'
          value={search}
          placeholder='Search Wiki-yoga'
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className='fa-solid fa-magnifying-glass' />
      </form>
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 30px 0;
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
`;

export default Search;
