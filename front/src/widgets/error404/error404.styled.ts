import styled from "styled-components";
import { Button } from "../../shared/ui/button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 84px;
`;

export const IconImage = styled.img`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size-md);
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  min-width: 460px;
`;

export const ErrorButton = styled(Button)`
  min-width: 218px;
  min-height: 48px;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;