import styled from 'styled-components';

const StyledArticle = styled.div`
  hr {
    margin-bottom: 20px;
  }
  .header-content {
    display: flex;
    margin-top: 20px;

    img {
      width: 300px;
      height: 180px;
      object-fit: contain;
    }
  }

  ul {
    padding-left: 40px;
  }
`;

export default StyledArticle;
