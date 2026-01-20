import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const handleCardOpen = (id: number) => {
  const navigate = useNavigate();

  //Заглушка
  const handleOpen = useCallback(() => {
    console.log(`Переход к карточке с id: ${id}`);
    navigate(`/card/${id}`);
  }, [navigate, id]);

  return { handleOpen };
};
