import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import notificationIcon from '../../shared/img/icon/notification.svg';
import likeIcon from '../../shared/img/icon/like.svg';
import { NotificationsPanel } from '../../shared/ui/modal/NotificationsPanel';

interface HeaderUserProps {
  userName: string;
  userAvatar: string;
  onClickUser: () => void;
}

export const HeaderUser = (props: HeaderUserProps) => {
  const { userName, userAvatar, onClickUser } = props;

  const navigate = useNavigate();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  return (
    <>
      <Styled.UserWrapper>
        <Styled.IconButton
          type="button"
          aria-label="Уведомления"
          onClick={() => setIsNotificationsOpen(true)}
        >
          <img src={notificationIcon} alt="" aria-hidden="true" />
        </Styled.IconButton>

        <Styled.IconButton
          type="button"
          aria-label="Избранное"
          onClick={handleFavoritesClick}
        >
          <img src={likeIcon} alt="" aria-hidden="true" />
        </Styled.IconButton>

        <Styled.UserInfo onClick={onClickUser} aria-label="Профиль">
          <Styled.UserName>{userName}</Styled.UserName>
          <Styled.UserAvatar src={userAvatar} alt={userName} />
        </Styled.UserInfo>
      </Styled.UserWrapper>

      <NotificationsPanel
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </>
  );
};
