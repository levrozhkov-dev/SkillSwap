import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as Styled from './profileSidebar.styled';

import RequestIcon from '../../shared/img/icon/request.svg?react';
import MessageIcon from '../../shared/img/icon/message-text.svg?react';
import LikeIcon from '../../shared/img/icon/like.svg?react';
import IdeaIcon from '../../shared/img/icon/idea.svg?react';
import UserIcon from '../../shared/img/icon/user.svg?react';

export const ProfileSidebar: FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      label: 'Заявки',
      path: '/profile/request',
      icon: RequestIcon,
      underConstruction: true,
    },
    {
      label: 'Мои обмены',
      path: '/profile/exchanges',
      icon: MessageIcon,
      underConstruction: true,
    },
    {
      label: 'Избранное',
      path: '/profile/favorites',
      icon: LikeIcon,
      underConstruction: true,
    },
    {
      label: 'Мои навыки',
      path: '/profile/skills',
      icon: IdeaIcon,
      underConstruction: true,
    },
    {
      label: 'Личные данные',
      path: '/profile',
      icon: UserIcon,
      underConstruction: false,
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Styled.Container>
      <Styled.SidebarContainer>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={(e) => item.underConstruction && e.preventDefault()}
          >
            <Styled.SidebarItem
              $isActive={isActive(item.path)}
              $underConstruction={item.underConstruction}
              aria-label={item.label}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (
                  item.underConstruction &&
                  (e.key === 'Enter' || e.key === ' ')
                ) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
            >
              <Styled.IconWrapper>
                <item.icon aria-hidden="true" />
              </Styled.IconWrapper>
              {item.label}
            </Styled.SidebarItem>
          </Link>
        ))}
      </Styled.SidebarContainer>
    </Styled.Container>
  );
};
