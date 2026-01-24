import styled from 'styled-components';

export const SkillOfferContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

export const SkillOfferHeader = styled.div`
  margin-bottom: var(--space-sm);
`;

export const SkillOfferSubtitle = styled.p`
  font-family: var(--font-main);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
`;

export const SkillOfferMain = styled.div`
  display: flex;
  gap: var(--space-lg);
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SkillOfferText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

export const SkillOfferTitle = styled.h2`
  font-family: var(--font-main);
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-main);
  margin: 0;
`;

export const SkillOfferCategory = styled.p`
  font-family: var(--font-main);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
`;

export const SkillOfferDescription = styled.p`
  font-family: var(--font-main);
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: var(--color-text-main);
  margin: 0;
`;

export const SkillOfferImages = styled.div`
  flex: 1;
  display: flex;
  gap: var(--space-sm);
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MainImage = styled.div`
  flex: 2;
  border-radius: var(--radius-sm);
  overflow: hidden;
  aspect-ratio: 1;
  background-color: var(--color-bg-note);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AdditionalImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

export const AdditionalImage = styled.div<{ $overlay?: boolean }>`
  flex: 1;
  border-radius: var(--radius-sm);
  overflow: hidden;
  aspect-ratio: 1;
  background-color: var(--color-bg-note);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) =>
    props.$overlay &&
    `
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const OverlayText = styled.span`
  font-family: var(--font-main);
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: #ffffff;
`;

export const ModalFooterContent = styled.div`
  display: flex;
  gap: var(--space-sm);
  width: 100%;
  justify-content: flex-start;
`;
