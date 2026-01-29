import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './styled';
import { HeaderInput } from '../../entities/header-input';
import { HeaderButtons } from '../../entities/HeaderButtons';
import { HeaderUser } from '../../entities/HeaderUser';
import { ButtonIcon } from '../../shared/ui/buttonIcon/ButtonIcon';
import chevronDownIcon from '../../shared/img/icon/chevron-down.svg';
import logo from '../../shared/img/icon/logo.svg';
import searchIcon from '../../shared/img/icon/search.svg';
import cross from '../../shared/img/icon/cross.svg';
import moonIcon from '../../shared/img/icon/moon.svg';
import { ListSkills } from '../listSkills/listSkills';
import type { RootState } from '../../providers/store/store';
import { ProfileMenu } from '../profileMenu';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const skillsMenuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const authPage =
    location.pathname === '/login' || location.pathname === '/register';

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const isLogged = useSelector((state: RootState) => state.login.isLogged);
  const user = useSelector((state: RootState) => state.login.user);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleThemeToggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (skillsMenuRef.current && !skillsMenuRef.current.contains(target)) {
        setIsSkillsOpen(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(target)) {
        setIsProfileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSkillsOpen(false);
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderInner>
        {authPage ? (
          <>
            <Styled.Logo as={Link} to="/" aria-label="SkillSwap — на главную">
              <Styled.LogoIcon>
                <img src={logo} alt="" aria-hidden="true" />
              </Styled.LogoIcon>
              <span>SkillSwap</span>
            </Styled.Logo>
            <Styled.AuthCloseButton
              type="button"
              onClick={() => navigate('/')}
              aria-label="Закрыть"
              icon={
                <img
                  src={cross}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              }
              iconPosition="right"
            >
              Закрыть
            </Styled.AuthCloseButton>
          </>
        ) : (
          <>
            <Styled.LogoAndNav>
              <Styled.Logo as={Link} to="/" aria-label="SkillSwap — на главную">
                <Styled.LogoIcon>
                  <img src={logo} alt="" aria-hidden="true" />
                </Styled.LogoIcon>
                <span>SkillSwap</span>
              </Styled.Logo>

              <Styled.Nav>
                <Styled.NavLinkItem as={NavLink} to="/#about">
                  О проекте
                </Styled.NavLinkItem>

                <Styled.SkillsMenu ref={skillsMenuRef}>
                  <Styled.SkillsButton
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isSkillsOpen}
                    onClick={() => setIsSkillsOpen((v) => !v)}
                  >
                    <Styled.ThemeProjectContainer>
                      Все навыки
                    </Styled.ThemeProjectContainer>
                    <Styled.NavChevron $open={isSkillsOpen}>
                      <img src={chevronDownIcon} alt="" aria-hidden="true" />
                    </Styled.NavChevron>
                  </Styled.SkillsButton>

                  {isSkillsOpen && (
                    <Styled.SkillsDropdown role="menu" aria-label="Все навыки">
                      <Styled.SkillsDropdownCloseButton
                        type="button"
                        aria-label="Закрыть меню навыков"
                        onClick={() => setIsSkillsOpen(false)}
                      >
                        ×
                      </Styled.SkillsDropdownCloseButton>
                      <ListSkills
                        onSkillSelect={(value) => {
                          setSearchValue(value);
                          setIsSkillsOpen(false);
                        }}
                      />
                    </Styled.SkillsDropdown>
                  )}
                </Styled.SkillsMenu>
              </Styled.Nav>
            </Styled.LogoAndNav>

            <Styled.SearchWrapper>
              <HeaderInput
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Искать навык"
                icon={
                  !searchValue ? (
                    <img src={searchIcon} alt="" aria-hidden="true" />
                  ) : undefined
                }
                iconPosition="left"
              />
            </Styled.SearchWrapper>

            <Styled.RightSide>
              <ButtonIcon iconSrc={moonIcon} onClick={handleThemeToggle} />
              {isLogged && user ? (
                <Styled.UserMenu ref={profileMenuRef}>
                  <HeaderUser
                    userName={user.name}
                    userAvatar={user.avatar}
                    onClickUser={() => setIsProfileMenuOpen((prev) => !prev)}
                  />
                  {isProfileMenuOpen && (
                    <Styled.ModalProfileMenu
                      role="menu"
                      aria-label="меню профиля"
                    >
                      <ProfileMenu />
                    </Styled.ModalProfileMenu>
                  )}
                </Styled.UserMenu>
              ) : (
                <HeaderButtons
                  onLoginClick={() => navigate('/login')}
                  onRegisterClick={() => navigate('/register')}
                />
              )}
            </Styled.RightSide>
          </>
        )}
      </Styled.HeaderInner>
    </Styled.HeaderWrapper>
  );
};
