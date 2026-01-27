import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const LoginButtonContainer = styled.div`
  width: 92px;
  height: 48px;

  & > button {
    width: 100%;
    height: 100%;
    padding-left: 22px;

    font-size: var(--font-size-md, 16px);
    font-weight: 400;
    letter-spacing: 1.5px;
    border-radius: 12px;
  }
`;

export const RegisterButtonContainer = styled.div`
  width: 208px;
  height: 48px;

  & > button {
    width: 100%;
    height: 100%;
    padding-left: 24px;
    letter-spacing: 1.25px;
    font-size: var(--font-size-md, 16px);
    font-weight: 400;
    border-radius: 12px;
  }
`;
