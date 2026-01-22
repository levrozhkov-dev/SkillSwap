import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCardOpen = (id: number) => {
  const navigate = useNavigate();

  const handleOpen = useCallback(() => {
    const encodedId = encodeURIComponent(id);

    navigate(`/card/${encodedId}`, {
      state: { id }, // передаём id в state
    });
  }, [navigate, id]);

  return { handleOpen };
};
