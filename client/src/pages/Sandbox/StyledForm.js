import styled from 'styled-components';

const StyledForm = styled.div`
  margin-bottom: 60px;
  .heading {
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  form {
    padding: 30px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;

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

    button {
      margin-top: 20px;
      padding: 10px 25px;
      background: var(--color-darkBrown);
      border: none;
      color: var(--color-white);
      font-size: 1.2rem;
      border-radius: 30px;
    }
  }
`;

export default StyledForm;
