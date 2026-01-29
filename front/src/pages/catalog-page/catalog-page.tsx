import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { Get } from '../../shared/api/req/get';
import { clearFilters } from '../../features/slice/usedFiltersSlice';

export const CatalogPage: FC = () => {
  const [users, setUsers] = useState<UsersResponse | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);

  const initialState = {
    gender: null,
    learn: null,
    categories: {},
    cities: [],
  };
  const [dataFilter, setDataFilter] = useState<FilterData>(initialState);

  const clearDataFilter = () => setDataFilter(initialState);

  const handleUsers = useCallback(async (block?: 'popular' | 'new') => {
    let response;
    if (block === 'new') {
      response = await Get('users/new');
    } else {
      response = await Get('users/likes');
    }
    setUsers(response.data);
    // Добавляем запись в историю, чтобы кнопка «Назад» работала
    navigate('/', { state: { view: 'flat', block: block ?? 'popular' } });
  }, [navigate]);

  // Сброс к первоначальному виду при переходе на каталог (логотип, кнопка Назад)
  const usersRef = useRef(users);
  usersRef.current = users;

  useEffect(() => {
    if (location.pathname !== '/') return;
    const shouldReset = location.state?.catalogReset === true;
    const isFlatView = location.state?.view === 'flat';
    const currentUsers = usersRef.current;
    // Сброс при клике на логотип или при возврате кнопкой «Назад» из плоского списка
    if (shouldReset || (!isFlatView && Array.isArray(currentUsers))) {
      if (isInitialMount.current && !shouldReset) {
        isInitialMount.current = false;
        return;
      }
      isInitialMount.current = false;
      setDataFilter({ ...initialState });
      dispatch(clearFilters());
      GetUsers('/users/user').then((res) => setUsers(res.data));
    } else if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  }, [location.pathname, location.key, location.state]);

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
          <ListCard users={users} onShowAllCLick={handleUsers}/>
        </ScrollableBox>
      </div>
    </Styled.CatalogPage>
  );
};
