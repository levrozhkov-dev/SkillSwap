import styled from 'styled-components';
import { theme } from '../../../../shared/styles/theme';
export {
  FormContainer,
  FormWrapper,
  FormBlock,
  ButtonsBlock,
  FormButton,
  ErrorText,
  DecorativeBlock,
  DecorativeImage,
  DecorativeTitle,
  DecorativeText,
} from '../RegisterFormCommon.styled';

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
  background: ${theme.colors.accent};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconAddPhoto = styled.img`
  width: 9px;
  height: 9px;
`;

export const BirthdateAndGenderBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.xl};
`;
