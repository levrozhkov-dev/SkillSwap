import styled from 'styled-components';
import { Button } from '../../../shared/ui/button';

export const OfferWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: var(--space-xxl) 52px;
    border-radius: var(--radius-smd);
    max-width: 1020px;
    max-height: 444px;
    background: var(--color-bg-card);
`;

export const OfferActions = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 16px;
`;

export const OfferContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 77px;
`;

export const OfferInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 399px;
`;

export const H2 = styled.h2`
    font-weight: 500;
    font-size: var(--font-size-xl);
    line-height: 28px;
    margin-bottom: var(--space-xs);
    color: var(--color-text-main);
`;

export const Caption = styled.p`
    font-weight: 400;
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-md);
    margin-bottom: var(--space-lg);
    color: var(--color-text-secondary);
`;

export const P = styled.p`
    margin-bottom: 28px;
    font-family: var(--font-secondary);
`;

export const Btn = styled(Button)`
    /*Roboto не подключен */    
    font-family: var(--font-secondary);
    font-weight: 400;
    min-width: 218px;
    min-height: 48px;
    justify-content: center;
`;

export const BtnDisabled = styled(Button)`
    font-family: var(--font-secondary);
    font-weight: 400;
    min-width: 218px;
    min-height: 48px;
    justify-content: center;
    cursor: not-allowed;
    pointer-events: none;
`;

export const OfferImages = styled.div`
    display: grid;
    grid-template-columns: 1fr 92px;
    gap: var(--space-md);
    height: 100%;
    min-height: 324px;
`;

export const MiniaturesColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    height: 100%;
`;

export const MiniatureImage = styled.img`
    width: 100%;
    min-height: 92px;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: var(--radius-smd);
`;