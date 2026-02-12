import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCardOpen = (id: number) => {
  const navigate = useNavigate();

  const handleOpen = useCallback(() => {
    const encodedId = encodeURIComponent(id);

    navigate(`/card/${encodedId}`);
  }, [navigate, id]);

  return { handleOpen };
};
