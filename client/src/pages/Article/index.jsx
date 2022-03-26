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

function Article() {
  const location = useLocation();
  const article = location.state;

  console.log(article);
  console.log('first');
  return (
    <StyledArticle>
      Article
      <Heading article={article} />
      <Etymology article={article} />
      <Description article={article} />
      <Variations article={article} />
      <SeeAlso article={article} />
      <FurtherReading article={article} />
    </StyledArticle>
  );
}

const StyledArticle = styled.div`
  margin: 50px;
  padding: 60px;
`;
export default Article;
