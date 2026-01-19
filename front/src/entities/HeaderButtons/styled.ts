import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: var(--space-sm, 8px);
  align-items: center;
`;

export const ThemeButtonContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    border-radius: var(--radius-sm, 12px);
    cursor: pointer;
    padding: 0;
    color: var(--color-text-main);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--color-button-hover, #deebc5);
    }

    &:active {
      background-color: var(--color-button-pressed, #508826);
    }

    &:focus {
      outline: 1px solid var(--color-accent, #abd27a);
      outline-offset: 2px;
    }
  }
`;

export const ThemeIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
