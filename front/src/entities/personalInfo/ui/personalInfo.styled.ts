import styled from "styled-components";
import { theme } from "../../../shared/styles/theme";
import { Button } from "../../../shared/ui/button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 1020px;
  padding: 60px;
  background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.smd};
  font-family: var(--font-secondary);

  form {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 60px;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  width: 100%;
  max-width: 460px;
`;

export const BirthdateAndGenderBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Photo = styled.div`
  position: relative;
  width: 244px;
  height: 244px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IconPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const AddPhoto = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.buttonHover};
  border-radius: 50%;
`;

export const IconAddPhoto = styled.img`
  width: 20px;
  height: 20px;
`;

export const ErrorText = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #bf3920;
  margin-top: -0.2rem;
`;

export const FormButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-block: 12px;
  font-family: var(--font-secondary);
  font-weight: 400;
  color: ${theme.colors.textMain};
  background-color: ${theme.colors.buttonHover};

  &:hover {
    font-weight: 500;
  }

  &:disabled {
    background-color: ${theme.colors.bgLine};
    color: ${theme.colors.textMain};
    cursor: not-allowed;

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.bgLine} !important;
      color: ${theme.colors.textMain} !important;
      transform: none;
      box-shadow: none;
      font-weight: 400;
    }
  }
`;

export const PasswordChangeButton = styled.button`
  width: 100%;
  font-family: var(--font-secondary);
  font-size: ${theme.font.size.md};
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${theme.colors.buttonPressed};
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: -4px;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    background: ${theme.colors.buttonPressed};
    color: ${theme.colors.bgCard};
  }

  &:focus {
    outline: 2px solid ${theme.colors.buttonHover};
  }
`;

export const EyeButton = styled.button.attrs({ type: 'button' })`
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: auto;
`;