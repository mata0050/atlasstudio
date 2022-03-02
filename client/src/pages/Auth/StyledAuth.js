import styled from 'styled-components';

const StyledAuth = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  h2 {
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
  }

  .login {
    width: 400px;
    margin-inline: auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
  }

  p {
    font-size: 1rem;
  }

  form {
    margin-top: 20px;
    label {
      display: none;
    }

    .flex {
      display: flex;
      gap: 20px;
    }
    input {
      height: 45px;
      width: 100%;
      margin-bottom: 15px;
      padding-left: 8px;
      border: none;
      border-bottom: 1px solid #ccc;
    }

    button {
      margin-top: 20px;
      width: 100%;
      border-radius: 3px;
      font-size: 1.1rem;
      border: none;
      background: var(--color-darkBrown);
      color: var(--color-white);
      padding: 10px 25px;
    }
  }

  .footer {
    display: block;
    margin-top: 20px;
    font-size: 0.9rem;
    text-align: center;
    a {
      text-decoration: none;
      color: var(--color-black);
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;

export default StyledAuth;
