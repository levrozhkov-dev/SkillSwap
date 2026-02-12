import React, { useCallback, useState } from 'react';
import { Checkbox } from '../../../../shared/ui/checkbox/checkbox';
import type { CategoryCheckboxProps } from '../../../../shared/ui/checkbox/type';
import * as Styled from './styled';
import { useAppDispatch } from '../../../../providers/store/store';
import { deleteCategory, selectUsedFilters, toggleFilter } from '../../../../features/slice/usedFiltersSlice';
import { useSelector } from 'react-redux';

export const CategoryCheckbox = (props: CategoryCheckboxProps) => {
  const { categoryData, selectedCategories } = props;

  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const usedFilters = useSelector(selectUsedFilters);

  const subIds = categoryData.subCategories.map((sub) => sub.id);
  const subNames = categoryData.subCategories.map((sub) => sub.name);

  // верхний чекбокс считается checked, если: категория есть в selectedCategories, но подкатегорий нет
  // active - если у этой категории есть выбранные подкатегории
  // isOpen - или если категория открыта
  
  const categoryChecked = Object.keys(usedFilters).includes(categoryData.title);
  const categoryActive = (selectedCategories[categoryData.id] && selectedCategories[categoryData.id].length > 0) ?? false;

  // вычисляем подкатегории
  const subChecked = subIds.map(
    (id) => selectedCategories[categoryData.id]?.includes(id) ?? false, 
  );

  // клик по категории - открытие и закрытие (по стрелочке)
  const handleCategoryClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('Toggle open - 1 раз');
    setIsOpen(prev => !prev);
  }, []);

  //клик по категории для выбора
  const handleCategoryChange = useCallback(() => {   
    dispatch(toggleFilter({
      filter: 'category', 
      filterValue: categoryData.title, 
      catId: categoryData.id,
      subcatList: subNames
    }));
  }, [dispatch, categoryData.title, categoryData.id, subNames]);

  // клик по субкатегории
  const handleSubChange = (id: number, name: string) => {
    dispatch(toggleFilter({
      filter: 'subcategory', 
      filterValue: name, 
      catId: categoryData.id, 
      subcatId: id
    }));
    dispatch(deleteCategory(categoryData.title));
  };

  return (
    <>
      <Styled.CheckboxContainer className={isOpen ? 'open' : ''} onClick={handleCategoryClick}>
        <Checkbox
          label={categoryData.title}
          checked={categoryChecked}
          isCategoryActive={categoryActive}
          onChange={handleCategoryChange}
        />
      </Styled.CheckboxContainer>

      <Styled.CheckboxListContainer isClosing={!isOpen}>
        {categoryData.subCategories.map((sub, index) => (
          <Checkbox
            key={sub.id}
            label={sub.name}
            checked={subChecked[index]}
            isCategoryActive={false}
            onChange={() => handleSubChange(sub.id, sub.name)}
          />
        ))}
      </Styled.CheckboxListContainer>
    </>
  );
};
