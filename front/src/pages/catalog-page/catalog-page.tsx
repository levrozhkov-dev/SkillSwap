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
import { UsedFilters } from '../../widgets/UsedFilters/UsedFilters';

export const CatalogPage: FC = () => {
  const [users, setUsers] = useState<UsersResponse | null>(null);

  const initialState = {
    gender: null,
    learn: null,
    categories: {},
    cities: [],
  };
  const [dataFilter, setDataFilter] = useState<FilterData>(initialState);

  const clearDataFilter = () => setDataFilter(initialState);

  useEffect(() => {
    console.log('dataFilter', dataFilter);

    // формируем payload для запроса
    const filterToSend = {
      ...dataFilter,
      gender: dataFilter.gender ?? 'Не имеет значения',
      learn: dataFilter.learn ?? 'Всё',
    };

    const isFilterActive =
      filterToSend.gender !== 'Не имеет значения' ||
      filterToSend.learn !== 'Всё' ||
      Object.keys(filterToSend.categories).length > 0 ||
      (filterToSend.cities && filterToSend.cities.length > 0);

    if (isFilterActive) {
      GetUserFilter('/filter', filterToSend).then((res) => setUsers(res.data));
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
        clearDataFilter={clearDataFilter}
      />
      <div style={{ width: '100%' }}>
        <UsedFilters setDataFilter={setDataFilter} dataFilter={dataFilter}/>
        <ScrollableBox width="100%" height="750px">
          <ListCard users={users} />
        </ScrollableBox>
      </div>
    </Styled.CatalogPage>
  );
};
