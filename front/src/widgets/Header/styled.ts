import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 36px 38px 32px 40px;
  box-sizing: border-box;
  background-color: var(--color-bg-main);
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
  position: relative;
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
  top: calc(100% + 12px);
  left: 0;
  min-width: 260px;
  max-width: 360px;
  max-height: 380px;
  overflow: auto;
  padding: 8px;
  background: var(--color-bg-card);
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(37, 48, 23, 0.12);
  z-index: 10;
`;

export const SkillsItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  background: transparent;
  border-radius: 12px;
  font: inherit;
  color: var(--color-text-main);
  cursor: pointer;

  &:hover {
    background: var(--color-button-hover);
  }

  &:active {
    background: var(--color-button-pressed);
    color: #fff;
  }
`;

export const SkillsEmpty = styled.div`
  padding: 10px 12px;
  color: var(--color-text-secondary);
`;
