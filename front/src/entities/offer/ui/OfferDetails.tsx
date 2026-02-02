import { ButtonIcon } from '../../../shared/ui/buttonIcon/ButtonIcon';
import * as Styled from './OfferDetails.styled';
import { CardLikeButton } from '../../card/ui/CardLikeButton';
import shareIcon from '../../../shared/img/icon/share.svg';
import moreIcon from '../../../shared/img/icon/more-square.svg';
import React from 'react';
import { OfferCarousel } from './OfferCarousel';
import {
  useAppDispatch,
  useAppSelector,
  type RootState,
} from '../../../providers/store/store';
import { useSelector } from 'react-redux';
import type { UserSkills } from '../../../widgets/ListCard/types/user';
import { toggleFavourite } from '../../../features/slice/loginSlice';

interface OfferDetailProps {
  cardId: number;
  liked: number;
  skillData: UserSkills;
}

export const OfferDetails: React.FC<OfferDetailProps> = ({
  cardId,
  skillData,
  liked: initialLikedCount,
}) => {
  const dispatch = useAppDispatch();

  const favourites = useAppSelector(
    (state) => state.login.user?.favourites ?? [],
  );

  const isLiked = favourites.includes(cardId);
  const liked = isLiked ? initialLikedCount + 1 : initialLikedCount;

  const handleToggleLike = () => {
    dispatch(toggleFavourite(cardId));
  };

  const categories = useSelector((state: RootState) => state.category.items);
  const category = categories.find(
    (category) => category.id === skillData.category,
  );
  const subCategory = category?.subCategories.find(
    (subCategory) => subCategory.id === skillData.subcategory,
  );

  return (
    <Styled.OfferWrapper>
      <Styled.OfferActions>
        <CardLikeButton
          liked={liked}
          onClick={handleToggleLike}
          isLiked={isLiked}
        />
        <ButtonIcon iconSrc={shareIcon} />
        <ButtonIcon iconSrc={moreIcon} />
      </Styled.OfferActions>
      <Styled.OfferContent>
        <Styled.OfferInfo>
          <Styled.H2>{skillData.name}</Styled.H2>
          <Styled.Caption>
            {category?.title || 'Неизвестная категория'} /{' '}
            {subCategory?.name || 'Неизвестная подкатегория'}
          </Styled.Caption>
          <Styled.P>{skillData.description}</Styled.P>
          <Styled.Btn>Предложить обмен</Styled.Btn>
        </Styled.OfferInfo>
        <Styled.OfferImages>
          <OfferCarousel images={skillData.imgs} />
          <Styled.MiniaturesColumn>
            {skillData.imgs.slice(1, 4).map((image, index) => (
              <Styled.MiniatureImage
                key={index}
                src={image}
                alt={`Миниатюра фотографии навыка №${index + 1}`}
              />
            ))}
          </Styled.MiniaturesColumn>
        </Styled.OfferImages>
      </Styled.OfferContent>
    </Styled.OfferWrapper>
  );
};
