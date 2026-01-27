import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  &:focus-visible {
    outline: 2px solid var(--color-button-pressed);
    outline-offset: 2px;
    border-radius: 4px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const UserInfo = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--color-button-pressed);
    outline-offset: 2px;
    border-radius: 8px;
  }
`;

export const UserName = styled.span`
  font-family: var(--font-main);
  font-size: var(--font-size-md, 16px);
  font-weight: 400;
  color: var(--color-text-main);
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
