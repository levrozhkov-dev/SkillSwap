import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './styled';
import { HeaderInput } from '../../entities/header-input';
import { HeaderButtons } from '../../entities/HeaderButtons';
import chevronDownIcon from '../../shared/img/icon/chevron-down.svg';
import logo from '../../shared/img/icon/logo.svg';
import searchIcon from '../../shared/img/icon/search.svg';
import type { RootState } from '../../providers/store/store';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const skillsMenuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const categories = useSelector((state: RootState) => state.category.items);

  const flatSkills = useMemo(() => {
    const skills: { id: number; name: string }[] = [];
    for (const cat of categories) {
      for (const sub of cat.subCategories ?? []) {
        skills.push({ id: sub.id, name: sub.name });
      }
    }
    return skills;
  }, [categories]);

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
      const target = e.target as Node | null;
      if (!target) return;
      if (skillsMenuRef.current && !skillsMenuRef.current.contains(target)) {
        setIsSkillsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSkillsOpen(false);
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
                <Styled.ThemeProjectContainer>Все навыки</Styled.ThemeProjectContainer>
                <Styled.NavChevron $open={isSkillsOpen}>
                  <img src={chevronDownIcon} alt="" aria-hidden="true" />
                </Styled.NavChevron>
              </Styled.SkillsButton>

              {isSkillsOpen && (
                <Styled.SkillsDropdown role="menu" aria-label="Все навыки">
                  {flatSkills.length === 0 ? (
                    <Styled.SkillsEmpty role="menuitem" tabIndex={-1}>
                      Нет категорий
                    </Styled.SkillsEmpty>
                  ) : (
                    flatSkills.slice(0, 30).map((s) => (
                      <Styled.SkillsItem
                        key={s.id}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setSearchValue(s.name);
                          setIsSkillsOpen(false);
                        }}
                      >
                        {s.name}
                      </Styled.SkillsItem>
                    ))
                  )}
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
          <HeaderButtons
            onThemeToggle={handleThemeToggle}
            onLoginClick={() => navigate('/login')}
            onRegisterClick={() => navigate('/register')}
          />
        </Styled.RightSide>
      </Styled.HeaderInner>
    </Styled.HeaderWrapper>
  );
};
