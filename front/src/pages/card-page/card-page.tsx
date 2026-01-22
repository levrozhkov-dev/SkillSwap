import { use, useEffect, useState, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { GetUser } from '../../shared/api/req/getCategories';
import type { User } from '../../widgets/ListCard/types/user';

type CardPageState = {
  id?: number;
};

export const CardPage: FC = () => {
  const location = useLocation();
  const state = location.state as CardPageState | null;

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!state?.id) return;

    const run = async () => {
      try {
        setIsLoading(true);
        const userResponse = await GetUser(`/users/${state.id}`);
        console.log('User data:', userResponse.data);
        setUser(userResponse.data);          // сохраняем user в состоянии
      } finally {
        setIsLoading(false);
      }
    };

    void run();
  }, [state?.id]);

  if (!state?.id) {
    return <div>Не передан id пользователя</div>;
  }

  if (isLoading || !user) {
    return <div>Загрузка пользователя...</div>;
  }

  return (
    <>
      <div>Это страница c карточкой (CardPage)</div>
      <div>Пользователь - {user.name}. ID - {user.id}</div>
    </>
  );
};
