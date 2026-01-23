import styled from 'styled-components';
import { Button } from '../../../shared/ui/button';

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 692px;
  background: var(--color-bg-main, #f9faf7);
`;

export const AuthWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
`;

export const AuthBlock = styled.div`
  max-width: 556px;
  background: var(--color-bg-card, #ffffff);
`;

export const DecorativeImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 40px;
`;

export const DecorativeText = styled.div`
  font-size: var(--font-size-md);
`;

export const SocialButton = styled(Button).attrs({ variant: 'white' })`
  border-color: var(--color-text-secondary, #69735d);
  width: 100%;
`;

export const Divider = styled.div`
  display: flex;
`;

export const PasswordHint = styled.div`
  font-size: var(--font-size-xs, 12px);
`;
