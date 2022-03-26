import React from 'react';
import parse from 'html-react-parser';

// Styles
import StyledArticle from './StyledArticle';

function FurtherReading({ article }) {
  return (
    <StyledArticle>
      <h1>FurtherReading</h1>
      <hr />
      {parse(article.further_reading)}
    </StyledArticle>
  );
}

export default FurtherReading;
