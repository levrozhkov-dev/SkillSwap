import { useCallback, useEffect, useMemo } from 'react';
import { setLike, toggleLike } from '../slice/likesSlice';
import { useAppDispatch, useAppSelector } from '../../providers/store/store';

export const useCardLike = (id: number, initialLiked: number) => {
  const dispatch = useAppDispatch();

  const likeItem = useAppSelector((state) =>
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

  // Часто используется используем UseMemo
  return useMemo(() => ({
    liked,
    isLiked,
    handleToggleLike,
  }), [liked, isLiked, handleToggleLike]);
};
