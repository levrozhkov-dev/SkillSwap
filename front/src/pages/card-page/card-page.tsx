import { useEffect, useState, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { GetUser } from '../../shared/api/req/getCategories';
import type { User } from '../../widgets/ListCard/types/user';
import { UserOffer } from '../../widgets/UserOffer/UserOfffer';
import { SimilarCards } from '../../entities/similar-cards/SimilarCards';

type RouteParams = {
  id?: string;
};

export const CardPage: FC = () => {
  const { id } = useParams<RouteParams>();
  const numericId = id ? Number(id) : undefined;

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!numericId) return;

    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const userResponse = await GetUser(`/users/${numericId}`);
        console.log('User data:', userResponse.data);
        setUser(userResponse.data);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchUser();
  }, [numericId]);

  if (!numericId) {
    return <div>Некорректный id в адресной строке</div>;
  }

  if (isLoading || !user) {
    return <div>Загрузка пользователя...</div>;
  }

  return (
    <>
      <UserOffer userInfo={user} />
      {/* показываем похожие карточки по категории навыка пользователя */}
      <SimilarCards categoryId={user.skills.category}/>
    </>
  );
};
