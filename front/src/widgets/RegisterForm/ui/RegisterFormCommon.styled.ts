import styled from 'styled-components';
import { Button } from '../../../shared/ui/button';
import { theme } from '../../../shared/styles/theme';

// Общие стили для всех шагов регистрации
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.bgMain};
  margin-bottom: ${theme.spacing.xxl};
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  width: 100%;
  max-width: 1136px;
  justify-content: center;
`;

export const FormBlock = styled.div`
  width: 100%;
  max-width: 556px;
  padding: 60px;
  background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.smd};

  form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.md};
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  padding: ${theme.spacing.smd};
  justify-content: center;
`;

export const ButtonsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.md};
`;

export const FormButton = styled(Button)`
  width: 100%;
  justify-content: center;
  padding: ${theme.spacing.smd};
`;

export const DecorativeBlock = styled.div`
  width: 100%;
  max-width: 556px;
  padding: 60px;
  background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.smd};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const DecorativeImage = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 40px;
`;

export const DecorativeContent = styled.div`
  text-align: center;
`;

export const DecorativeTitle = styled.h2`
  font-size: ${theme.font.size.xl};
  color: ${theme.colors.textMain};
  margin-bottom: ${theme.spacing.smd};
  font-weight: 500;
`;

export const DecorativeText = styled.p`
  font-size: ${theme.font.size.md};
  color: ${theme.colors.textSecondary};
`;

export const ErrorText = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: -0.2rem;
  color: #bf3920;
`;
