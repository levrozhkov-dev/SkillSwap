import styled from 'styled-components';
import { Button } from '../../../../shared/ui/button';
import { theme } from '../../../../shared/styles/theme';

export {
  FormContainer,
  FormWrapper,
  DecorativeBlock,
  DecorativeImage,
  DecorativeContent,
  DecorativeTitle,
  DecorativeText,
} from '../RegisterFormCommon.styled';

import { FormBlock as BaseFormBlock } from '../RegisterFormCommon.styled';
import { SubmitButton as BaseSubmitButton } from '../RegisterFormCommon.styled';

export const FormBlock = styled(BaseFormBlock)`
  padding: 122px 60px;
`;

export const SocialButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid ${theme.colors.textSecondary};

  & > span {
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.smd};
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.font.size.sm};
  margin: ${theme.spacing.sm} 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${theme.colors.textSecondary};
    opacity: 0.3;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const PasswordHint = styled.span`
  font-size: ${theme.font.size.xs};
  color: ${theme.colors.textSecondary};
`;

export const EyeButton = styled.button.attrs({ type: 'button' })`
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled(BaseSubmitButton)`
  margin-top: ${theme.spacing.md};
`;
