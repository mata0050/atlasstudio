import styled from 'styled-components';

const StyledForm = styled.div`
  margin-bottom: 60px;
  p {
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  form {
    padding: 30px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    label {
      margin: 15px 0;
    }

    .ck-editor__editable {
      min-height: 200px !important;
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
      background: #9d4d69;
      border: none;
      color: var(--color-white);
      font-size: 1.2rem;
      border-radius: 30px;
    }
  }
`;

export default StyledForm;
