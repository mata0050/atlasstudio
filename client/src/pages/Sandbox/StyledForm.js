import styled from 'styled-components';

const StyledForm = styled.div`
  margin-bottom: 60px;
  padding: 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 10px 0px rgba(62, 62, 62, 0.75);
  .heading {
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: 500;
  }


    label {
      margin: 15px 0;
    }

    .ck-editor__editable {
      min-height: 150px !important;
    }

    input {
      height: 35px;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding-left: 10px;
    }

    .file-upload {
      border: none;
    }

    .diagram {
      display: flex;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 30px;
      }
    }

    /* button {
      margin-top: 20px;
      padding: 10px 25px;
      background: var(--color-darkBrown);
      border: none;
      color: var(--color-white);
      font-size: 1.2rem;
      border-radius: 30px;
    } */
  
`;

export default StyledForm;
