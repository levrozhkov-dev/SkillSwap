import * as Styled from './Footer.styled';
import logo from '../../shared/img/icon/logo.svg';

export const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.LogoContainer>
        <Styled.LogoLink to={'/'}>
          <img
            src={logo}
            alt="Логотип SkillSwap"
            width={'40px'}
            height={'40px'}
          />
          <Styled.Title>SkillSwap</Styled.Title>
        </Styled.LogoLink>
      </Styled.LogoContainer>

      <Styled.LinksContainer>
        <Styled.LiElement>О проекте</Styled.LiElement>
        <Styled.LiElement>Контакты</Styled.LiElement>
        <Styled.LiElement>Политика конфиденциальности</Styled.LiElement>
        <Styled.LiElement>Все навыки</Styled.LiElement>
        <Styled.LiElement>Блог</Styled.LiElement>
        <Styled.LiElement>Пользовательское соглашение</Styled.LiElement>
      </Styled.LinksContainer>

      <Styled.FooterBottom>SkillSwap - 2025</Styled.FooterBottom>
    </Styled.Footer>
  );
};
