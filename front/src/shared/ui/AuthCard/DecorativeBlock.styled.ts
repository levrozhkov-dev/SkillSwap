import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const DecorativeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.bgCard};
  width: 100%;
  max-width: 556px;
`;

export const DecorativeImage = styled.img`
  max-width: 100%
  height: auto;
  margin-bottom: 40px;
`;
