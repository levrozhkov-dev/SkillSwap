import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/slice/loginSlice';
import * as Styled from './profileMenu.styled';
import LogoutIcon from '../../shared/img/icon/logout.svg?react';

export const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Styled.Container>
      <Styled.MenuItem type="button" onClick={handleProfileClick}>
        Личный кабинет
      </Styled.MenuItem>
      <Styled.MenuItem type="button" onClick={handleLogoutClick}>
        Выйти из аккаунта
        <Styled.IconWrapper>
          <LogoutIcon aria-hidden="true" />
        </Styled.IconWrapper>
      </Styled.MenuItem>
    </Styled.Container>
  );
};
