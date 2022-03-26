import React from 'react';
import parse from 'html-react-parser';

// Styles
import StyledArticle from './StyledArticle';

function Variations({ article }) {
  return (
    <StyledArticle>
      <h1>Variations</h1>
      <hr />
      {parse(article.variations)}

      <h4 style={{ color: 'red' }}>
        Working on adding multiple images and video
      </h4>
    </StyledArticle>
  );
}

export default Variations;
