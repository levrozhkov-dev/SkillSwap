import { useEffect, useState, type FC } from 'react';
import { ListCard } from '../../widgets/ListCard/ListCard';
import type { UsersResponse } from '../../widgets/ListCard/types/users-response';
import { GetUsers } from '../../shared/api/req/getCategories';
import { FilterBlock } from '../../entities/filter/ui/FilterBlock';
import { mockFilterGender, mockFilterLearn } from '../../shared/mock/filters';

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
      <FilterBlock {...mockFilterLearn} />
      <FilterBlock {...mockFilterGender} />
    </div>
  );
};
