import React from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import * as S from './NotificationsPanel.styled';
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
      <S.NotificationsContent>
        {newNotifications.length > 0 && (
          <S.NotificationsSection>
            <S.SectionHeader>
              <S.SectionTitle>Новые уведомления</S.SectionTitle>
              {onReadAll && (
                <S.ActionLink onClick={onReadAll}>Прочитать все</S.ActionLink>
              )}
            </S.SectionHeader>
            <S.NotificationsList>
              {newNotifications.map((notification) => (
                <S.NotificationItem key={notification.id}>
                  <S.NotificationIconWrapper>
                    <img
                      src={notification.icon || ideaIcon}
                      alt=""
                      aria-hidden="true"
                    />
                  </S.NotificationIconWrapper>
                  <S.NotificationContent>
                    <S.NotificationTitle>
                      {notification.title}
                    </S.NotificationTitle>
                    <S.NotificationDescription>
                      {notification.description}
                    </S.NotificationDescription>
                    {notification.actionButtonText && (
                      <Button
                        variant="green"
                        onClick={notification.onActionClick}
                        style={{ marginTop: 'var(--space-sm)' }}
                      >
                        {notification.actionButtonText}
                      </Button>
                    )}
                  </S.NotificationContent>
                  <S.NotificationTime>{notification.time}</S.NotificationTime>
                </S.NotificationItem>
              ))}
            </S.NotificationsList>
          </S.NotificationsSection>
        )}

        {viewedNotifications.length > 0 && (
          <S.NotificationsSection>
            <S.SectionHeader>
              <S.SectionTitle>Просмотренные</S.SectionTitle>
              {onClearViewed && (
                <S.ActionLink onClick={onClearViewed}>Очистить</S.ActionLink>
              )}
            </S.SectionHeader>
            <S.NotificationsList>
              {viewedNotifications.map((notification) => (
                <S.NotificationItem key={notification.id} $viewed>
                  <S.NotificationIconWrapper>
                    <img
                      src={notification.icon || ideaIcon}
                      alt=""
                      aria-hidden="true"
                    />
                  </S.NotificationIconWrapper>
                  <S.NotificationContent>
                    <S.NotificationTitle>
                      {notification.title}
                    </S.NotificationTitle>
                    <S.NotificationDescription>
                      {notification.description}
                    </S.NotificationDescription>
                  </S.NotificationContent>
                  <S.NotificationTime>{notification.time}</S.NotificationTime>
                </S.NotificationItem>
              ))}
            </S.NotificationsList>
          </S.NotificationsSection>
        )}

        {newNotifications.length === 0 && viewedNotifications.length === 0 && (
          <S.EmptyState>Нет уведомлений</S.EmptyState>
        )}
      </S.NotificationsContent>
    </Modal>
  );
};
