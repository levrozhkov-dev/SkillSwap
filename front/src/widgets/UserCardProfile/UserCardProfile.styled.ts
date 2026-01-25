import styled from "styled-components";
import { Card, CardContent, Info, Name } from "../../entities/card/ui/Card.styled";

export const UserCardProfile = styled(Card)`
  gap: var(--space-xl);
  padding: var(--space-xxl);
`;

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
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  font-weight: 400;
`;
