import styled from 'styled-components';

export const Container = styled.div`
  a {
    color: #face48;
    font-weight: bold;

    &:hover,
    &:focus {
      color: #fcde83;
    }
  }

  button {
    &:hover,
    &:focus {
      background: #fcde83;
      color: #000;
    }
  }

  input {
    height: 50px;
  }
`;

export const TArea = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  padding: 20px;
  form {
    display: flex;
    align-items: flex-start;
    margin-right: 50px;
    * {
      margin-right: 10px;
    }
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  .preview {
    white-space: pre;
  }
`;
