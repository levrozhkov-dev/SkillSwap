import { useEffect, useState, type FC } from 'react';
import { ListCard } from '../../widgets/ListCard/ListCard';
import type { UsersResponse } from '../../widgets/ListCard/types/users-response';
import { GetUsers } from '../../shared/api/req/getCategories';

export const CatalogPage: FC = () => {
  const [users, setUsers] = useState<UsersResponse | null>(null);

  useEffect(() => {
    GetUsers('/users/user').then((res) => setUsers(res.data));
  }, []);

  if (!users) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <ListCard users={users} />
    </div>
  );
};
