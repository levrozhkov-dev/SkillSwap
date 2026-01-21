import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;

    padding: 32px 36px;

    display: flex;
    flex-direction: column;
    align-items: start;

    background-color: var(--color-bg-card);
`;

export const LogoContainer = styled.div`
    cursor: pointer;

    width: fit-content;
    max-width: 100%;
`;

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: var(--space-smd);

    text-decoration: none;

    color: var(--color-text-main);
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    line-height: 133%;
    letter-spacing: -0.01em;
`;

export const LinksContainer = styled.ul`
    margin-top: 20px;

    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 324px));
    column-gap: 24px;
    row-gap: var(--space-smd);
    grid-template-rows: 1fr 1fr;

    align-self: flex-end;

    list-style: none;
`;

export const LiElement = styled.li`
    cursor: pointer;
`;

export const FooterBottom = styled.p`
    margin-top: 32px;

    font-weight: 400;
    font-size: var(--font-zize-xs);
    line-height: 133%;
    letter-spacing: 0.02em;
    color: var(--color-text-secondary);
`;