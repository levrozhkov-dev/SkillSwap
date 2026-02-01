import { ButtonIcon } from '../../../shared/ui/buttonIcon/ButtonIcon';
import * as Styled from './OfferDetails.styled';
import { CardLikeButton } from '../../card/ui/CardLikeButton';
import shareIcon from '../../../shared/img/icon/share.svg';
import moreIcon from '../../../shared/img/icon/more-square.svg';
import React from 'react';
import { OfferCarousel } from './OfferCarousel';
import type { RootState } from '../../../providers/store/store';
import { useSelector } from 'react-redux';
import {useCardLike} from '../../../features/card-like/handleCardLike';

interface OfferDetailProps {
    cardId: number;
    title: string;
    skill: {
        categoryId: number;
        subCategoryId: number;
    };
    description: string;
    images: string[];
    liked: number;
}

export const OfferDetails: React.FC<OfferDetailProps> = ({
    cardId,
    title,
    skill,
    description,
    images,
    liked: initialLikedCount
}) => {
    const {liked, isLiked, handleToggleLike} = useCardLike(cardId, initialLikedCount);
    
    const categories = useSelector((state: RootState) => state.category.items);
    const category = categories.find(category => category.id === skill.categoryId);
    const subCategory = category?.subCategories.find(subCategory => subCategory.id === skill.subCategoryId);
    
    return (
        <Styled.OfferWrapper>
            <Styled.OfferActions>
                <CardLikeButton liked = {liked} onClick={handleToggleLike} isLiked={isLiked} />
                <ButtonIcon iconSrc={shareIcon}/>
                <ButtonIcon iconSrc={moreIcon}/>
            </Styled.OfferActions>
            <Styled.OfferContent>
                <Styled.OfferInfo>
                    <Styled.H2>{title}</Styled.H2>
                    <Styled.Caption>{category?.title || 'Неизвестная категория'} / {subCategory?.name || 'Неизвестная подкатегория'}</Styled.Caption>
                    <Styled.P>{description}</Styled.P>
                    <Styled.Btn>Предложить обмен</Styled.Btn>
                </Styled.OfferInfo>
                <Styled.OfferImages>
                    <OfferCarousel images={images} />
                    <Styled.MiniaturesColumn>
                        {images.slice(1,4).map((image, index) => (
                            <Styled.MiniatureImage key={index} src={image} alt={`Миниатюра фотографии навыка №${index + 1}`} />
                        ))}
                    </Styled.MiniaturesColumn>
                </Styled.OfferImages>
            </Styled.OfferContent>
        </Styled.OfferWrapper>
    );
};