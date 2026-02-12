import { useCallback, useEffect, useState } from 'react';
import type { User } from '../../widgets/ListCard/types/user';
import useEmblaCarousel from 'embla-carousel-react';
import * as Styled from './styled';
import { Card } from '../card';
import { post } from '../../shared/api/req/post';
import ChevronRight from '../../shared/img/icon/chevron-right.svg';

// типизируем пропсы для компонента
type TSimilarCardsProps = {
  categoryId: number;
};

// принимаем пропс для
export const SimilarCards = (props: TSimilarCardsProps) => {
  const { categoryId } = props;
  // стейт для карточек получаемых с сервера
  const [cards, setCards] = useState<User[]>([]);

  // стейты показывающие можем ли мы переместиться
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // получаем реф для карусели и api для карусели
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start', // прижимаем карточки к левому краю
    slidesToScroll: 1, // за один скрол перемещаемся на 1 карточку
    containScroll: 'trimSnaps', // убираем полупустые края
    dragFree: false, // нельзя остановиться между карточками
  });

  // получаем функции для перемещения по карусели
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  //  функция для обновления состояний кнопок перемещения по карусели
  const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // эффект биндит обновления кнопок
  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();

    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);
  }, [emblaApi, updateButtons]);

  // эффект для получения карточек с сервера
  useEffect(() => {
    // функция получает данные о подходящих карточках с сервера и записывает их в стейт
    const func = async () => {
        const res = await post("users/category", {categoryId});
        setCards(res.data);
    };

    void func();
  }, [categoryId]);

  return (
    <Styled.Section>
      <Styled.H2>Похожие предложения</Styled.H2>

      <Styled.CarouselContainer>
        {canScrollPrev && (
          <Styled.Arrow direction="left" onClick={scrollPrev}>
            <img src={ChevronRight} alt="Назад" />
          </Styled.Arrow>
        )}

        <Styled.Viewport ref={emblaRef}>
          <Styled.Carousel>
            {cards.map((card) => (
              <Styled.Slide key={card.id}>
                <Card
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  avatar={card.avatar}
                  city={card.city}
                  age={card.age}
                  liked={card.liked}
                  skills={[card.skills]}
                  categories={card.categories}
                />
              </Styled.Slide>
            ))}
          </Styled.Carousel>
        </Styled.Viewport>

        {canScrollNext && (
          <Styled.Arrow direction="right" onClick={scrollNext}>
            <img src={ChevronRight} alt="Вперёд" />
          </Styled.Arrow>
        )}
        
      </Styled.CarouselContainer>
    </Styled.Section>
  );
};
