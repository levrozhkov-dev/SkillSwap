import * as Styled from './Card.styled';

interface CardAvatarProps {
  src: string;
  alt?: string;
}

export const CardAvatar = (props: CardAvatarProps) => {
  const { src, alt='User avatar' } = props;

  return <Styled.Avatar src={src} alt={alt} />;
};
