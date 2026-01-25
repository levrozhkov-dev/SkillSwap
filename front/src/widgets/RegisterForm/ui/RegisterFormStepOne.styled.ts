import styled from 'styled-components';
import { Button } from '../../../shared/ui/button';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: var(--color-bg-main);
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1136px;
  justify-content: center;
`;

export const FormBlock = styled.div`
  width: 100%;
  max-width: 556px;
  padding: 40px;
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const SocialButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--color-text-secondary);

  span {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin: 8px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-text-secondary);
    opacity: 0.3;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PasswordHint = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;

export const DecorativeBlock = styled.div`
  width: 100%;
  max-width: 556px;
  padding: 40px;
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DecorativeImage = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 24px;
`;

export const DecorativeContent = styled.div`
  text-align: center;
`;

export const DecorativeTitle = styled.h2`
  font-size: var(--font-size-lg);
  color: var(--color-text-main);
  margin-bottom: 12px;
  font-weight: 500;
`;

export const DecorativeText = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  line-height: 1.5;
`;
