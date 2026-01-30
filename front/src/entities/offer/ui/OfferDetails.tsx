import { ButtonIcon } from '../../../shared/ui/buttonIcon/ButtonIcon';
import * as Styled from './OfferDetails.styled';
import likeIcon from '../../../shared/img/icon/like.svg';
import shareIcon from '../../../shared/img/icon/share.svg';
import moreIcon from '../../../shared/img/icon/more-square.svg';
import React from 'react';
import { OfferCarousel } from './OfferCarousel';

interface OfferDetailProps {
    title: string;
    category: string;
    description: string;
    images: string[];
}

export const OfferDetails: React.FC<OfferDetailProps> = ({ title, category, description, images }) => {
    return (
        <Styled.OfferWrapper>
            <Styled.OfferActions>
                <ButtonIcon iconSrc={likeIcon}/>
                <ButtonIcon iconSrc={shareIcon}/>
                <ButtonIcon iconSrc={moreIcon}/>
            </Styled.OfferActions>
            <Styled.OfferContent>
                <Styled.OfferInfo>
                    <Styled.H2>{title}</Styled.H2>
                    <Styled.Caption>{category}</Styled.Caption>
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