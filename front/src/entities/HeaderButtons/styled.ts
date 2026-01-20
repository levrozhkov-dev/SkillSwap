import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: var(--space-sm, 8px);
  align-items: center;
`;

export const ThemeButtonContainer = styled.div`
  margin-right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

export const LoginButtonContainer = styled.div`
  width: 92px;
  height: 48px;

  & > button {
    width: 100%;
    height: 100%;
    font-size: var(--font-size-md, 16px);
    font-weight: 400;
    border-radius: var(--radius-sm, 12px);
  }
`;

export const RegisterButtonContainer = styled.div`
  width: 208px;
  height: 48px;

  & > button {
    width: 100%;
    height: 100%;
    font-size: var(--font-size-md, 16px);
    font-weight: 400;
    border-radius: var(--radius-sm, 12px);
  }
`;
