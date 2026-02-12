import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type KeyboardEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../providers/store/store';
import { HeaderInput } from './header-input';
import searchIcon from '../../shared/img/icon/search.svg';
import * as Styled from './SkillSearch.styles';
import {
  clearFilters,
  toggleFilter,
} from '../../features/slice/usedFiltersSlice';
import { useClickOutside } from '../../shared/hooks/useClickOutside';

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
  const searchContainerRef = useRef<HTMLDivElement>(null);
  console.log(categories);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<SkillItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const searchTimeoutRef = useRef<number | null>(null);

  // Функция поиска с debounce
  const handleSearch = (text: string) => {
    setSearch(text);
    setFocusedIndex(-1);

    // Если строка пустая - сбрасываем результаты
    if (!text.trim()) {
      setResults([]);
      setIsSearching(false);
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

      categories.forEach((cat) => {
        // Поиск по категориям
        if (cat.title.toLowerCase().includes(lowerText)) {
          const subcatList = cat.subCategories?.map((sub) => sub.name) || [];

          found.push({
            id: cat.id,
            name: cat.title,
            type: 'category',
            subcatList: subcatList,
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
              parentId: cat.id,
            });
          }
        });
      });

      setResults(found.slice(0, 5));
      setIsSearching(false);
      setFocusedIndex(found.length > 0 ? 0 : -1);
    }, 300);
  };

  // Выбор результата
  const handleSelect = (item: SkillItem) => {
    setSearch('');
    setResults([]);
    setIsSearching(false);
    setFocusedIndex(-1);

    console.log('Выбран навык:', item);
    dispatch(clearFilters());
    // Диспатчим выбор в фильтры
    if (item.type === 'category') {
      dispatch(
        toggleFilter({
          filter: 'category',
          filterValue: item.name,
          catId: item.id,
          subcatList: item.subcatList || [],
        }),
      );
    } else if (item.type === 'subcategory' && item.parentId) {
      dispatch(
        toggleFilter({
          filter: 'subcategory',
          filterValue: item.name,
          catId: item.parentId,
          subcatId: item.id,
        }),
      );
    }
  };

  // Обработка нажатия клавиш
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        break;

      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        break;

      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && results[focusedIndex]) {
          handleSelect(results[focusedIndex]);
        }
        break;

      case 'Escape':
        e.preventDefault();
        setResults([]);
        setFocusedIndex(-1);
        break;
    }
  };

  // Скролл к активному элементу
  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [focusedIndex]);

  // Сброс refs
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, results.length);
  }, [results]);

  // Функция закрытия дропдауна
  const closeDropdown = useCallback(() => {
    setResults([]);
    setIsSearching(false);
    setFocusedIndex(-1);
  }, []);

  // Хук для клика вне области
  useClickOutside(searchContainerRef, closeDropdown);

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current !== null) {
        window.clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Styled.SearchContainer ref={searchContainerRef}>
      <HeaderInput
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Поиск навыков..."
        icon={
          !search ? (
            <img src={searchIcon} alt="" aria-hidden="true" />
          ) : undefined
        }
        iconPosition="left"
        aria-expanded={results.length > 0}
        aria-activedescendant={
          focusedIndex >= 0 ? `result-${focusedIndex}` : undefined
        }
      />

      {/* Подсказки или сообщение "Ничего не найдено" */}
      {search.trim() && (results.length > 0 || isSearching) && (
        <Styled.ResultsDropdown role="listbox" id="search-results">
          {isSearching ? (
            // Индикатор загрузки
            <Styled.LoadingContainer>
              <Styled.LoadingSpinner />
              Поиск...
            </Styled.LoadingContainer>
          ) : results.length > 0 ? (
            // Список найденных результатов
            results.map((item, index) => (
              <Styled.ResultItem
                key={`${item.type}-${item.id}`}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setFocusedIndex(index)}
                $isFocused={focusedIndex === index}
                role="option"
                id={`result-${index}`}
                aria-selected={focusedIndex === index}
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
