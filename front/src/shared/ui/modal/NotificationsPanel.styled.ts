import styled from 'styled-components';

export const NotificationsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

export const NotificationsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h3`
  font-family: var(--font-main);
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-main);
  margin: 0;
`;

export const ActionLink = styled.button`
  background: none;
  border: none;
  font-family: var(--font-main);
  font-size: var(--font-size-md);
  color: var(--color-accent);
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-button-pressed);
  }
`;

export const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

export const NotificationItem = styled.div<{ $viewed?: boolean }>`
  display: flex;
  gap: var(--space-md);
  padding: var(--space-md);
  border-radius: var(--radius-sm);
  background-color: ${(props) =>
    props.$viewed ? 'transparent' : 'var(--color-bg-note)'};
  opacity: ${(props) => (props.$viewed ? 0.7 : 1)};
`;

export const NotificationIconWrapper = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NotificationContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`;

export const NotificationTitle = styled.div`
  font-family: var(--font-main);
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-text-main);
`;

export const NotificationDescription = styled.div`
  font-family: var(--font-main);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
`;

export const NotificationTime = styled.div`
  flex-shrink: 0;
  font-family: var(--font-main);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  align-self: flex-start;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: var(--space-lg);
  color: var(--color-text-secondary);
  font-family: var(--font-main);
  font-size: var(--font-size-md);
`;
