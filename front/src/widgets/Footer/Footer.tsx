import React from 'react';
import {
  StyledFooter,
  LogoContainer,
  LinksContainer,
  Title,
  FooterBottom,
  LogoLink,
  LiElement
} from './Footer.styled';
import logo from '../../shared/img/icon/logo.svg';

export const Footer = () => {
  return (
    <StyledFooter>
      <LogoContainer>
        <LogoLink to={'/'}>
          <img
            src={logo}
            alt="Логотип SkillSwap"
            width={'40px'}
            height={'40px'}
          />
          <Title>SkillSwap</Title>
        </LogoLink>
      </LogoContainer>

      <LinksContainer>
        <LiElement>О проекте</LiElement>
        <LiElement>Контакты</LiElement>
        <LiElement>Политика конфиденциальности</LiElement>
        <LiElement>Все навыки</LiElement>
        <LiElement>Блог</LiElement>
        <LiElement>Пользовательское соглашение</LiElement>
      </LinksContainer>

      <FooterBottom>SkillSwap - 2025</FooterBottom>
    </StyledFooter>
  );
};
