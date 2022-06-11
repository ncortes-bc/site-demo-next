import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    border: none;
    border-bottom: 2px solid lightgrey;
    margin-top: 20px;
  }

  & > input {
    font: 14px 'Open Sans', sans-serif;
    background-color: transparent;
  }

  & > textarea {
    font: 14px 'Open Sans', sans-serif;
    resize: none;
    height: 170px;
    background-color: transparent;
  }
`;
