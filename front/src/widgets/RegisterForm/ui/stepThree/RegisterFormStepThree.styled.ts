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

export const Dropzone = styled.div<{ $isDragActive: boolean }>`
  width: 100%;
  padding: ${theme.spacing.lg};
  border-radius: ${theme.radius.md};
  border: 1px dashed ${theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  gap: ${theme.spacing.sm};
  background-color: ${(p) => (p.$isDragActive ? theme.colors.buttonHover : theme.colors.bgCard)};
`;

export const DropzoneTitle = styled.div`
  font-size: ${theme.font.size.md};
  color: ${theme.colors.textSecondary};
`;

export const DropzoneAction = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const DropzoneActionIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const DropzoneActionText = styled.span`
  font-size: ${theme.font.size.sm};
  color: ${theme.colors.buttonPressed};
`;

export const ImagesPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.sm};
`;

export const PreviewImageWrapper = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${theme.radius.sm};
  display: block;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 12px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;

  ${PreviewImageWrapper}:hover & {
    opacity: 1;
  }
`;
