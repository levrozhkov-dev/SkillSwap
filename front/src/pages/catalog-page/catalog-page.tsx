import { useEffect, useState, type FC } from 'react';
import { ListCard } from '../../widgets/ListCard/ListCard';
import type { UsersResponse } from '../../widgets/ListCard/types/users-response';
import { GetUsers } from '../../shared/api/req/getCategories';
import { mockFilterGender, mockFilterLearn } from '../../shared/mock/filters';
import { Filter } from '../../widgets/Filter/ui/filter';
import * as Styled from './styled';
import { GetUserFilter } from '../../shared/api/req/postFilter';
import type { FilterData } from '../../widgets/Filter/ui/types';
import { ScrollableBox } from '../../shared/ui/scrollableBox/scrollableBox';

export const CatalogPage: FC = () => {
  const [users, setUsers] = useState<UsersResponse | null>(null);

  const [dataFilter, setDataFilter] = useState<FilterData>({
    gender: null,
    learn: null,
  });

  useEffect(() => {
    const isFilterActive =
      dataFilter.gender !== null || dataFilter.learn !== null;

    if (isFilterActive) {
      GetUserFilter('/filter', dataFilter).then((res) => setUsers(res.data));
    } else {
      GetUsers('/users/user').then((res) => setUsers(res.data));
    }
  }, [dataFilter]);

  if (!users) return <div>Загрузка...</div>;

  return (
    <Styled.CatalogPage>
      <Filter
        mockFilterLearn={mockFilterLearn}
        mockFilterGender={mockFilterGender}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
      />

      <ScrollableBox width="100%" height="750px">
        <ListCard users={users} />
      </ScrollableBox>
    </Styled.CatalogPage>
  );
};
