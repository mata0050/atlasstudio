import React from 'react';
import parse from 'html-react-parser';

// Styles
import StyledArticle from './StyledArticle';

function SeeAlso({ article }) {
  return (
    <StyledArticle>
      <h1>See Also</h1>
      <hr />
      {parse(article.see_also)}
    </StyledArticle>
  );
}

export default SeeAlso;
