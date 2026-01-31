import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: var(--space-xxl);

    margin-bottom: 60px;
`;

export const H2 = styled.h2`
    font-weight: 500;
    font-size: var(--font-size-xl);
    line-height: 117%;
    letter-spacing: -0.01em;
`;

export const CarouselContainer = styled.div`
    width: 100%;

    position: relative;
`;

export const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const Carousel = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    flex-direction: row;
`;

export const Slide = styled.div`
    // каждый слайд занимает не более 20% от родительского контейнера
    flex: 0 0 20%;

    display: flex;
    justify-content: center;
`;

export const Arrow = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  z-index: 1;
  top: 50%;

  transform: translateY(-50%);
  
  border-radius: 50%;

  width: 32px;
  height: 32px;

  cursor: pointer;

  background-color: var(--color-bg-line);

  border: none;

  padding: 0;

  /* Позиционирование */
  ${({ direction }) => direction === 'left' ? 'left: -16px;' : 'right: -16px;'}

  /* Поворот SVG/иконки */
  & svg, & img {
    ${({ direction }) => direction === 'left' ? 'transform: rotate(180deg);' : ''}
  }
`;