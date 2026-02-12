import React, {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import * as Styled from "./OfferCarousel.styled";
import chevronLeft from "../../../shared/img/icon/chevron-left.svg";
import chevronRight from "../../../shared/img/icon/chevron-right.svg";

interface OfferCarouselProps {
  images: string[];
}

export const OfferCarousel: React.FC<OfferCarouselProps> = ({images}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <Styled.CarouselWrapper ref={emblaRef}>
            <Styled.Container>
                {images.map((src, index) => (
                    <Styled.Slide key={index}>
                        <Styled.Image src={src} alt={`Картинка навыка №${index + 1}`} />
                    </Styled.Slide>
                ))}
            </Styled.Container>
            <Styled.NavButton isRight={false} onClick={scrollPrev} iconSrc={chevronLeft}/>
            <Styled.NavButton isRight={true} onClick={scrollNext} iconSrc={chevronRight} />
        </Styled.CarouselWrapper>
    );
};