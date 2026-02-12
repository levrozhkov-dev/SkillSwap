import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../../shared/ui/button';
import { theme } from '../../../shared/styles/theme';
import { Input } from '../../../shared/ui/form-fields/';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  background: ${theme.colors.bgMain};
`;

export const AuthWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
`;

export const AuthBlock = styled.div`
  max-width: 556px;
  width: 100%;
  padding: 98px 60px;
  background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.lg};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 30px;
`;

export const AuthInput = styled(Input)`
  border-radius: ${theme.radius.sm};
`;

export const SocialButton = styled(Button).attrs({ variant: 'white' })`
  justify-content: center;
  border-color: ${theme.colors.textSecondary};
  width: 100%;
  margin-top: 12px;
  height: 48px;

  img {
    vertical-align: middle;
    margin-right: 10px;
  }
`;

export const LoginButton = styled(Button).attrs({ variant: 'green' })`
  width: 100%;
  height: 50px;
  justify-content: center;
  font-size: ${theme.font.size.md};
  font-color: ${theme.colors.textMain};
  margin-bottom: 10px;
`;

export const RegisterLink = styled(Link)`
  display: block;
  font-size: ${theme.font.size.md};
  color: ${theme.colors.buttonPressed};
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.1em;

  &:hover {
    color: ${theme.colors.textMain};
  }

  &:focus {
    outline: none;
    color: ${theme.colors.textMain};
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  width: 100%;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${theme.colors.bgLine};
    display: block;
  }

  span {
    color: ${theme.colors.textMain};
    font-size: ${theme.font.size.md};
    padding: 0 4px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 500;
`;

export const DecorativeImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 40px;
`;

export const DecorativeText = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EyeButton = styled.button.attrs({ type: 'button' })`
  background: none;
  border: none;
  cursor: pointer;
  pointer-events: auto;
`;
