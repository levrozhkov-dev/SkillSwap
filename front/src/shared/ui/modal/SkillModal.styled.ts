import styled from 'styled-components';
import { Button } from '../button';
import { theme } from '../../styles/theme';

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xxl);
  min-height: 500px;
  box-sizing: border-box;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
`;

export const Title = styled.h2`
  font-family: var(--font-main);
  font-size: var(--font-size-xl);
  font-weight: 500;
  color: var(--color-text-main);
  margin: 0;
  text-align: center;
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
  justify-content: space-between;
`;

export const ModalButton = styled(Button)`
  min-width: 204px;
  justify-content: center;
  padding: ${theme.spacing.smd};
`;

export const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const GallerySection = styled.div`
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
`;

export const CarouselWrapper = styled.div`
  width: 324px;
  height: 324px;
`;

export const ThumbnailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  height: 100%;
  justify-content: space-between;
`;

export const Thumbnail = styled.img`
  width: 92px;
  height: 92px;
  object-fit: cover;
  border-radius: var(--radius-smd);
`;
