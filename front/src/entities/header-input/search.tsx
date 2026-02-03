import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../providers/store/store';
import { HeaderInput } from './header-input';
import searchIcon from '../../shared/img/icon/search.svg';
import * as Styled from './SkillSearch.styles';
import { clearFilters, toggleFilter } from '../../features/slice/usedFiltersSlice';

type SkillItem = {
  id: number;
  name: string;
  type: 'category' | 'subcategory';
  parentName?: string;
  parentId?: number;
  subcatList?: string[];
};

export const SkillSearch = () => {
  const categories = useSelector((state: RootState) => state.category.items);
  console.log(categories);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<SkillItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchTimeoutRef = useRef<number | null>(null);

  // Функция поиска с debounce
  const handleSearch = (text: string) => {
    setSearch(text);

    // Если строка пустая - сбрасываем результаты
    if (!text.trim()) {
      setResults([]);
      setIsSearching(false);
      dispatch(clearFilters());
      return;
    }

    setIsSearching(true);

    // Очищаем предыдущий таймер
    if (searchTimeoutRef.current !== null) {
      window.clearTimeout(searchTimeoutRef.current);
    }

    // Устанавливаем новый таймер
    searchTimeoutRef.current = window.setTimeout(() => {
      const lowerText = text.toLowerCase();
      const found: SkillItem[] = [];

      // Простой поиск
    categories.forEach((cat) => {
      // Поиск по категориям
      if (cat.title.toLowerCase().includes(lowerText)) {
        const subcatList = cat.subCategories?.map(sub => sub.name) || [];
        
        found.push({
          id: cat.id,
          name: cat.title,
          type: 'category',
          subcatList: subcatList
        });
      }

      // Поиск по подкатегориям
      cat.subCategories?.forEach((sub) => {
        if (sub.name.toLowerCase().includes(lowerText)) {
          found.push({
            id: sub.id,
            name: sub.name,
            type: 'subcategory',
            parentName: cat.title,
            parentId: cat.id
          });
        }
      });
    });
        console.log(`Фаунд: ${found}`);
      setResults(found.slice(0, 5));
      setIsSearching(false);
    }, 300);
  };

  // Выбор результата
  const handleSelect = (item: SkillItem) => {
    setSearch('');
    setResults([]);
    setIsSearching(false);
    
    console.log('Выбран навык:', item);
    dispatch(clearFilters());
    // Диспатчим выбор в фильтры
    if (item.type === 'category') {
      dispatch(toggleFilter({
        filter: 'category',
        filterValue: item.name,
        catId: item.id,
        subcatList: item.subcatList || []
      }));
    } else if (item.type === 'subcategory' && item.parentId) {
      dispatch(toggleFilter({
        filter: 'subcategory',
        filterValue: item.name,
        catId: item.parentId,
        subcatId: item.id
      }));
    }
  };

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current !== null) {
        window.clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Styled.SearchContainer>
      <HeaderInput
        value={search}
        onChange={handleSearch}
        placeholder="Поиск навыков..."
        icon={
          !search ? (
            <img src={searchIcon} alt="" aria-hidden="true" />
          ) : undefined
        }
        iconPosition="left"
      />

      {/* Подсказки или сообщение "Ничего не найдено" */}
      {search.trim() && (results.length > 0 || isSearching) && (
        <Styled.ResultsDropdown>
          {isSearching ? (
            // Индикатор загрузки
            <Styled.LoadingContainer>
              <Styled.LoadingSpinner />
              Поиск...
            </Styled.LoadingContainer>
          ) : results.length > 0 ? (
            // Список найденных результатов
            results.map((item) => (
              <Styled.ResultItem
                key={`${item.type}-${item.id}`}
                onClick={() => handleSelect(item)}
              >
                <Styled.ResultName>{item.name}</Styled.ResultName>
                <Styled.ResultMeta>
                  <span>{item.type === 'category' ? '📁' : '📄'}</span>
                  <span>
                    {item.type === 'category' ? 'Категория' : 'Подкатегория'}
                  </span>
                  {item.parentName && (
                    <>
                      <span>•</span>
                      <span>{item.parentName}</span>
                    </>
                  )}
                </Styled.ResultMeta>
              </Styled.ResultItem>
            ))
          ) : (
            // Сообщение "Ничего не найдено"
            <Styled.NoResultsMessage>
              <Styled.SearchIcon>🔍</Styled.SearchIcon>
              <Styled.NoResultsText>Ничего не найдено</Styled.NoResultsText>
              <Styled.NoResultsHint>
                Попробуйте изменить запрос
              </Styled.NoResultsHint>
            </Styled.NoResultsMessage>
          )}
        </Styled.ResultsDropdown>
      )}
    </Styled.SearchContainer>
  );
};