import styled from "styled-components";
import { ButtonIcon } from "../../../shared/ui/buttonIcon/ButtonIcon";

export const CarouselWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    max-height: 324px;
    max-width: 324px;
`;  

export const Slide = styled.div`
    flex: 0 0 100%;
    min-width: 0;
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    max-height: 324px;
    max-width: 324px;
    height: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1 / 1;
    border-radius: var(--radius-smd);
`;

export const NavButton = styled(ButtonIcon)<{ isRight?: boolean}>`
    position: absolute;
    top: 50%;
    ${props => props.isRight ? 'right: var(--space-md);' : 'left: var(--space-md);'}
    width: 32px;
    height: 32px;
    background: var(--color-bg-line);
    z-index: 10;
    border-radius: 50%;

    & img {
        width: 16px;
        height: 16px;
    }
`;