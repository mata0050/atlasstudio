import React from 'react';
import parse from 'html-react-parser';

// Styles
import StyledArticle from './StyledArticle';

function Etymology({ article }) {
  return (
    <StyledArticle>
      <h1>Etymology and origins</h1>
      <hr />
      {parse(article.etymology_origin)}
    </StyledArticle>
  );
}


export default Etymology;
