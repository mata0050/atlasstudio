import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// Component
import Heading from './Heading';
import Etymology from './Etymology';
import Description from './Description';
import Variations from './Variations';
import SeeAlso from './SeeAlso';
import FurtherReading from './FurtherReading';
import Contents from './Contents';

function Article() {
  const location = useLocation();
  const article = location.state;

  return (
    <StyledArticle>
      <Contents />
      <div>
        <Heading article={article} />
        <Etymology article={article} />
        <Description article={article} />
        <Variations article={article} />
        <SeeAlso article={article} />
        <FurtherReading article={article} />
      </div>
    </StyledArticle>
  );
}

const StyledArticle = styled.div`
  margin-top: 60px;
  padding: 60px;
  display: flex;
`;
export default Article;
