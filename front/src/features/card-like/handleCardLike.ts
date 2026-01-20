import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../providers/store/store';
import { setLike, toggleLike } from '../slice/likesSlice';

export const useCardLike = (id: number, initialLiked: number) => {
  const dispatch = useDispatch<AppDispatch>();

  const likeItem = useSelector((state: RootState) =>
    state.likes.items.find((item) => item.id === id),
  );

  // число лайков
  const liked = likeItem?.like ?? initialLiked;
  // лайкнул ли текущий пользователь
  const isLiked = likeItem?.isLiked ?? false;

  // инициализируем запись в сторе
  useEffect(() => {
    if (!likeItem) {
      dispatch(setLike({ id, like: initialLiked, isLiked: false }));
    }
  }, [dispatch, id, initialLiked, likeItem]);

  const handleToggleLike = useCallback(() => {
    console.log(`Переключение лайка для карточки с id: ${id}`);
    dispatch(toggleLike({ id }));
  }, [dispatch, id]);

  return {
    liked,
    isLiked,
    handleToggleLike,
  };
};
