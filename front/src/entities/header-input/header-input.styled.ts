import styled from 'styled-components';

export const Input = styled.div`
  width: 100%;
  max-width: 100%;

  /* Переопределение стилей Input для Header */
  & > div {
    width: 100%;
  }

  input {
    width: 100%;
    border: none;

    &::placeholder {
      padding-left: 0;
    }
  }
`;
