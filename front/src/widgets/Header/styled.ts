import styled from 'styled-components';
import { theme } from '../../shared/styles/theme';
import { Button } from '../../shared/ui/button';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 36px 38px 32px 40px;
  box-sizing: border-box;
  background-color: var(--color-bg-main);
  position: relative;
`;

export const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 27px;
`;

export const LogoAndNav = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  min-width: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-main);
  text-decoration: none;
  cursor: pointer;
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-main);
  font-size: 18px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: var(--font-main);
  font-weight: 400;
  color: #253017;
  padding-right: 6px;
`;

export const NavLinkItem = styled.a`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: 0.5px;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    color: var(--color-text-main);
  }
  &:focus-visible {
    outline: 2px solid var(--color-button-pressed);
    outline-offset: 3px;
  }
`;

export const NavChevron = styled.span<{ $open?: boolean }>`
  display: inline-flex;
  transition: transform 160ms ease;
  transform: rotate(${(p) => (p.$open ? '180deg' : '0deg')});

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
  max-width: 760px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ThemeProjectContainer = styled.div`
  margin-left: 7px;
  letter-spacing: 1px;
`;

export const SkillsMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const SkillsButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: 0.5px;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    color: var(--color-text-main);
  }

  &:focus-visible {
    outline: 2px solid var(--color-button-pressed);
    outline-offset: 3px;
  }
`;

export const SkillsDropdown = styled.div`
  position: absolute;
  top: 94px;
  left: 36px;
  z-index: 10;
`;

export const SkillsDropdownCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background-color: ${theme.colors.bgCard};
  color: ${theme.colors.textSecondary};
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  z-index: 20;

  &:hover {
    background-color: ${theme.colors.buttonHover};
    color: ${theme.colors.textMain};
  }

  &:active {
    background-color: ${theme.colors.buttonPressed};
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.buttonPressed};
    outline-offset: 2px;
  }
`;

export const AuthCloseButton = styled(Button).attrs({ variant: 'white' })`
  width: fit-content;
  border: none;
  margin-right: 10px;
  display: flex;
  gap: ${theme.spacing.md};
  font-size: ${theme.font.size.md};
  line-height: 24px;
  weight: 400;
`;

export const ModalProfileMenu = styled.div`
  position: absolute;
  top: 104px;
  right: 36px;
  z-index: 10;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;
