import React from 'react';
import parse from 'html-react-parser';

// Styles
import StyledArticle from './StyledArticle';


function Description({ article }) {
  return (
    <StyledArticle>
      <h1>Description</h1>
      <hr />
      {parse(article.etymology_origin)}
    </StyledArticle>
  );
}


export default Description;
