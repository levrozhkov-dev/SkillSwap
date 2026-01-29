import styled from 'styled-components';
import { Button } from '../../../../shared/ui/button';
import { theme } from '../../../../shared/styles/theme';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 40px 60px;
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const ButtonsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.lg};
  margin-top: 16px;
`;

export const FormButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;

export const DecorativeBlock = styled.div`
  width: 100%;
  max-width: 556px;
  padding: 60px;
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const DecorativeImage = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 24px;
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
`;

export const Dropzone = styled.div<{ $isDragActive: boolean }>`
  width: 100%;
  padding: 16px 20px;
  border-radius: var(--radius-md);
  border: 1px dashed
    ${(p) => (p.$isDragActive ? 'var(--color-accent-main)' : 'var(--color-text-secondary)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  gap: 8px;
`;

export const DropzoneTitle = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
`;

export const DropzoneAction = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const DropzoneActionIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const DropzoneActionText = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-button-pressed);
`;

export const ErrorText = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: 4px;
  color: #bf3920;
`;

export const ImagesPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
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
  border-radius: 8px;
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

