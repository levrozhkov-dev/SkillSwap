import React, { useState } from 'react';
import { Checkbox } from '../../../../shared/ui/checkbox/checkbox';
import type { CategoryCheckboxProps } from '../../../../shared/ui/checkbox/type';
import * as Styled from './styled';

export const CategoryCheckbox: React.FC<CategoryCheckboxProps> = ({
  categoryData,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const subIds = categoryData.subCategories.map((sub) => sub.id);

  // верхний чекбокс считается выбранным, если:
  // - категория есть в selectedCategories
  // - или если категория открыта
  const categoryChecked =
    Object.prototype.hasOwnProperty.call(selectedCategories, categoryData.id) ||
    isOpen;

  // вычисляем подкатегории
  const subChecked = subIds.map(
    (id) => selectedCategories[categoryData.id]?.includes(id) ?? false,
  );

  // клик по категории
  const handleCategoryClick = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (!categoryChecked) {
      // создаем пустой массив при первом открытии
      setSelectedCategories({
        ...selectedCategories,
        [categoryData.id]: [],
      });
    } else if (categoryChecked && newIsOpen === false) {
      // закрытие категории → удаляем категорию из состояния
      const newSelected = { ...selectedCategories };
      delete newSelected[categoryData.id];
      setSelectedCategories(newSelected);
    }
  };

  // клик по субкатегории
  const handleSubChange = (index: number, checked: boolean) => {
    const subId = subIds[index];
    const newSelected = { ...selectedCategories };
    let catSubs = newSelected[categoryData.id] ?? [];

    if (checked) catSubs = [...catSubs, subId];
    else catSubs = catSubs.filter((id) => id !== subId);

    if (catSubs.length === 0) {
      // не удаляем категорию пока она открыта
      if (!isOpen) delete newSelected[categoryData.id];
      else newSelected[categoryData.id] = [];
    } else {
      newSelected[categoryData.id] = catSubs;
    }

    setSelectedCategories(newSelected);
  };

  return (
    <>
      <Styled.CheckboxContainer className={isOpen ? 'open' : ''}>
        <Checkbox
          label={categoryData.title}
          checked={categoryChecked}
          onChange={handleCategoryClick}
        />
      </Styled.CheckboxContainer>

      {isOpen && (
        <Styled.CheckboxListContainer>
          {categoryData.subCategories.map((sub, index) => (
            <Checkbox
              key={sub.id}
              label={sub.name}
              checked={subChecked[index]}
              onChange={(checked) => handleSubChange(index, checked)}
            />
          ))}
        </Styled.CheckboxListContainer>
      )}
    </>
  );
};
