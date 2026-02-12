import styled from "styled-components";
import { Card, CardCategories, CardContent, CardUserDescription, CategorySection, CategoryTags, CategoryTitle, Info, Name } from "../card/ui/Card.styled";

export const UserCardProfile = styled(Card)`
  gap: 0;
  padding: var(--space-xxl);
`;

export const UserInfoWrapper = styled(CardUserDescription)``;

export const UserInfo = styled(CardContent)`
  justify-content: center;
  gap: var(--space-xs);
`;

export const UserNameProfile = styled(Name)`
  font-size: var(--font-size-xl);
  font-weight: 500;
  line-height: var(--line-height-lg);
`;

export const UserInfoData = styled(Info)`
  line-height: var(--line-height-sm);
`;

export const UserDescription = styled.p`
  margin: 20px 0 24px;
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  font-weight: 400;
`;

export const UserCardCategories = styled(CardCategories)`
  gap: var(--space-xl);
`;

export const UserCardCategorySection = styled(CategorySection)`
  gap: var(--space-smmd);
`;

export const UserCardCategoryTitle = styled(CategoryTitle)``;

export const UserCardCategoryTags = styled(CategoryTags)`
  gap: var(--space-sm);
`;
