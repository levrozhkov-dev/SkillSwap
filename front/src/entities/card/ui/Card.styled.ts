import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  width: 324px;
  flex-shrink: 0;
`;

export const CardUserDescription = styled.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-smd);
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-main);
`;

export const Info = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-main);
  margin: 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-sm);
  margin-left: auto;
  flex-shrink: 0;
`;

export const LikeCount = styled.span`
  font-size: var(--font-size-md);
  font-weight: 500;
  color: var(--color-text-main);
`;

export const LikeIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const CardButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;

  button {
    width: 100%;
    padding: 12px 0;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-md);
  }
`;

export const CardCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-smd);
`;

export const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

export const CategoryTitle = styled.h4`
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-text-main);
  margin: 0;
`;

export const CategoryTags = styled.div`
  font-size: var(--font-size-xs);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;
