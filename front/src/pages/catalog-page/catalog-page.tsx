import { useEffect, useState, type FC } from 'react';
import { ListCard } from '../../widgets/ListCard/ListCard';
import type { UsersResponse } from '../../widgets/ListCard/types/users-response';
import { GetUsers } from '../../shared/api/req/getCategories';
import { Filter } from '../../widgets/Filter/ui/filter';
import * as Styled from './styled';
import { GetUserFilter } from '../../shared/api/req/postFilter';
import { ScrollableBox } from '../../shared/ui/scrollableBox/scrollableBox';
import { UsedFilters } from '../../widgets/UsedFilters/UsedFilters';
import { useSelector } from 'react-redux';
import { selectDataFilter, selectIsFilterActive } from '../../features/slice/usedFiltersSlice';

export const CatalogPage: FC = () => {
  const [users, setUsers] = useState<UsersResponse | null>(null);

  const isFilterActive = useSelector(selectIsFilterActive);
  const dataFilter = useSelector(selectDataFilter);

  useEffect(() => {
    console.log('dataFilter', dataFilter);

    // формируем payload для запроса
    const filterToSend = {
      ...dataFilter,
      gender: dataFilter.gender ?? 'Не имеет значения',
      learn: dataFilter.learn ?? 'Всё',
    };

    if (isFilterActive) {
      GetUserFilter('/filter', filterToSend).then((res) => setUsers(res.data));
    } else {
      GetUsers('/users/user').then((res) => setUsers(res.data));
    }
  }, [dataFilter, isFilterActive]);

  if (!users) return <div>Загрузка...</div>;

  return (
    <Styled.CatalogPage>
      <Filter />
      <div style={{ width: '100%' }}>
        <UsedFilters />
        
        {isFilterActive && Array.isArray(users) && (
          <Styled.FilterResultsTitle>
            Подходящие предложения: {users.length}
          </Styled.FilterResultsTitle>
        )}
        
        <ScrollableBox width="100%" height="750px">
          <ListCard users={users} />
        </ScrollableBox>
      </div>
    </Styled.CatalogPage>
  );
};
