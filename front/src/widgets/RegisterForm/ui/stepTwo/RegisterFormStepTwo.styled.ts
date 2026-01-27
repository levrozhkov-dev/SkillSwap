import styled from 'styled-components';
import { LoginDecorativeBlock } from '../../../../shared/ui/AuthCard/DecorativeBlock';
import { Button } from '../../../../shared/ui/button';
import { theme } from '../../../../shared/styles/theme';

// Основной контейнер формы
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
`;

// Блок формы
export const FormBlock = styled.div`
  width: 100%;
  max-width: 556px;
  padding: 40px 60px;
  background: ${theme.colors.bgCard} ;
  border-radius: 12px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.md};
  }
`;

// Загрузка аватара
export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Photo = styled.div`
  width: 72px;
  height: 72px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IconPhoto = styled.img`
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 50%;
`;

export const AddPhoto = styled.div`
  position: absolute;
  bottom: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  width: 16px;
  height: 16px;
  background:${theme.colors.accent};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconAddPhoto = styled.img`
  width: 9px;
  height: 9px;
`;

export const FileErrorText = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: -0.2rem;
  color: #bf3920;
`;

// Блок дата рождения и пол
export const BirthdateAndGenderBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

// Блок кнопок
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
`;

// Декоративный блок переназначение LoginDecorativeBlock
export const CustomDecorativeBlock = styled(LoginDecorativeBlock)`
  padding: 132px 60px;
  border-radius: 12px;
`;

export const DecorativeTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.textMain};
  margin-bottom: 12px;
`;

export const DecorativeText = styled.p`
  font-size: ${theme.font.size.md};
  line-height: 24px;
  color: ${theme.colors.textSecondary};
`;
