import styled from 'styled-components';

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

export const Subtitle = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-align: center;
  margin: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: var(--space-xl);
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SkillName = styled.h3`
  font-family: var(--font-main);
  font-size: var(--font-size-xl);
  font-weight: 500;
  color: var(--color-text-main);
  margin: 0 0 var(--space-xs) 0;
`;

export const CategoryText = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-md) 0;
`;

export const SkillDescription = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: var(--color-text-main);
  margin: 0 0 var(--space-lg) 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: var(--space-md);
  margin-top: auto;
`;

export const GallerySection = styled.div`
  display: flex;
  gap: var(--space-md);
`;

export const CarouselWrapper = styled.div`
  width: 324px;
  height: 324px;
`;

export const ThumbnailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

export const Thumbnail = styled.img`
  width: 92px;
  height: 92px;
  object-fit: cover;
  border-radius: var(--radius-smd);
`;
