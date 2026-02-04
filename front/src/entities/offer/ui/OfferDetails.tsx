import { ButtonIcon } from '../../../shared/ui/buttonIcon/ButtonIcon';
import * as Styled from './OfferDetails.styled';
import { CardLikeButton } from '../../card/ui/CardLikeButton';
import shareIcon from '../../../shared/img/icon/share.svg';
import moreIcon from '../../../shared/img/icon/more-square.svg';
import React, { useState } from 'react';
import { OfferCarousel } from './OfferCarousel';
import {
  useAppDispatch,
  useAppSelector,
  type RootState,
} from '../../../providers/store/store';
import { useSelector } from 'react-redux';
import type { UserSkills } from '../../../widgets/ListCard/types/user';
import { setOffer, toggleFavourite } from '../../../features/slice/loginSlice';
import { SuccessModal } from '../../../shared/ui/modal/SuccessModal';
import { useNavigate } from 'react-router-dom';
import { sendOffer } from '../../../shared/api/req/sendOffer';
import clockIcon from '../../../shared/img/icon/clock.svg';


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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
  
  const userSt = useSelector((state: RootState) => state.login.user);
  const offerSent = userSt?.sentOffers.find(offer => offer.userId === cardId);
  const senderId = useSelector((state: RootState) => state.login.user?.id);
  const isLogged = useSelector((state: RootState) => state.login.isLogged);
  const navigate = useNavigate();
  const handleOpenModal = async () => {
    if (isLogged) {
      if (senderId) {
        sendOffer('/users/send-offer', { senderId: senderId, receiverId: cardId });
        dispatch(setOffer({ userId: cardId, status: 'pending', date: new Date().toISOString() }));
      }
      setIsSuccessModalOpen(true);
    } else {
      navigate('/login');
    }
  };


  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
  };
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
          {offerSent ? (<Styled.BtnDisabled variant='white' icon={<img src={clockIcon} alt="" />} iconPosition='left'>Обмен предложен</Styled.BtnDisabled>) :
          (<Styled.Btn onClick={handleOpenModal}>Предложить обмен</Styled.Btn>)}
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
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        maxWidth='556px'
        title="Вы предложили обмен"
        description="Теперь дождитесь подтверждения. Вам придет уведомление"
        buttonText="Готово"
        onButtonClick={handleSuccessClose}
      />
    </Styled.OfferWrapper>
  );
};
