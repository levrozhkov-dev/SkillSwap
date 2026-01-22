import styled from "styled-components";
import { Button } from "../../shared/ui/button";

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 124px;
padding-bottom: 84px;`;

export const Illustration = styled.img`
margin-bottom: 40px`;

export const H2 = styled.h2`
font-weight: 500;
font-size: 24px;
line-height: 28px;
margin-bottom: 4px;`;

export const P = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: var(--font-size-md);
line-height: 24px;
margin-bottom: 32px;`;

export const ButtonsWrapper = styled.div`
display: flex;
gap: 24px;
flex-direction: row;
min-width: 460px;
justify-content: center;`;


// Поправил стили кнопки, так как они не соответствовали макету
export const ErrorButton = styled(Button)`
/*Roboto не подключен */
font-family: 'Roboto', sans-serif;
font-weight: 400;
min-width: 218px;
min-height: 48px;
justify-content: center;`;