import React from 'react';
import parse from 'html-react-parser';

// Styles
import StyledArticle from './StyledArticle';

function Heading({ article }) {
  return (
    <StyledArticle>
      <h1>{article.title}</h1>
      <hr />
      <div className='header-content'>
        {parse(article.pose_description)}
        <img src={article.pose_image} alt={article.title} />
      </div>
    </StyledArticle>
  );
}

export default Heading;
