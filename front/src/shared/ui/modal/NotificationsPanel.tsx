import React from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import * as Styled from './NotificationsPanel.styled';
import ideaIcon from '../../img/icon/idea.svg';

export interface Notification {
  id: string;
  icon?: string;
  title: string;
  description: string;
  time: string;
  isNew?: boolean;
  actionButtonText?: string;
  onActionClick?: () => void;
}

export interface NotificationsPanelProps extends Omit<
  ModalProps,
  'children' | 'title'
> {
  newNotifications?: Notification[];
  viewedNotifications?: Notification[];
  onReadAll?: () => void;
  onClearViewed?: () => void;
}

export const NotificationsPanel: React.FC<NotificationsPanelProps> = ({
  isOpen,
  onClose,
  newNotifications = [],
  viewedNotifications = [],
  onReadAll,
  onClearViewed,
  ...modalProps
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Уведомления"
      maxWidth="600px"
      {...modalProps}
    >
      <Styled.NotificationsContent>
        {newNotifications.length > 0 && (
          <Styled.NotificationsSection>
            <Styled.SectionHeader>
              <Styled.SectionTitle>Новые уведомления</Styled.SectionTitle>
              {onReadAll && (
                <Styled.ActionLink onClick={onReadAll}>
                  Прочитать все
                </Styled.ActionLink>
              )}
            </Styled.SectionHeader>
            <Styled.NotificationsList>
              {newNotifications.map((notification) => (
                <Styled.NotificationItem key={notification.id}>
                  <Styled.NotificationIconWrapper>
                    <img
                      src={notification.icon || ideaIcon}
                      alt=""
                      aria-hidden="true"
                    />
                  </Styled.NotificationIconWrapper>
                  <Styled.NotificationContent>
                    <Styled.NotificationTitle>
                      {notification.title}
                    </Styled.NotificationTitle>
                    <Styled.NotificationDescription>
                      {notification.description}
                    </Styled.NotificationDescription>
                    {notification.actionButtonText && (
                      <Button
                        variant="green"
                        onClick={notification.onActionClick}
                        style={{ marginTop: 'var(--space-sm)' }}
                      >
                        {notification.actionButtonText}
                      </Button>
                    )}
                  </Styled.NotificationContent>
                  <Styled.NotificationTime>
                    {notification.time}
                  </Styled.NotificationTime>
                </Styled.NotificationItem>
              ))}
            </Styled.NotificationsList>
          </Styled.NotificationsSection>
        )}

        {viewedNotifications.length > 0 && (
          <Styled.NotificationsSection>
            <Styled.SectionHeader>
              <Styled.SectionTitle>Просмотренные</Styled.SectionTitle>
              {onClearViewed && (
                <Styled.ActionLink onClick={onClearViewed}>
                  Очистить
                </Styled.ActionLink>
              )}
            </Styled.SectionHeader>
            <Styled.NotificationsList>
              {viewedNotifications.map((notification) => (
                <Styled.NotificationItem key={notification.id} $viewed>
                  <Styled.NotificationIconWrapper>
                    <img
                      src={notification.icon || ideaIcon}
                      alt=""
                      aria-hidden="true"
                    />
                  </Styled.NotificationIconWrapper>
                  <Styled.NotificationContent>
                    <Styled.NotificationTitle>
                      {notification.title}
                    </Styled.NotificationTitle>
                    <Styled.NotificationDescription>
                      {notification.description}
                    </Styled.NotificationDescription>
                  </Styled.NotificationContent>
                  <Styled.NotificationTime>
                    {notification.time}
                  </Styled.NotificationTime>
                </Styled.NotificationItem>
              ))}
            </Styled.NotificationsList>
          </Styled.NotificationsSection>
        )}

        {newNotifications.length === 0 && viewedNotifications.length === 0 && (
          <Styled.EmptyState>Нет уведомлений</Styled.EmptyState>
        )}
      </Styled.NotificationsContent>
    </Modal>
  );
};
