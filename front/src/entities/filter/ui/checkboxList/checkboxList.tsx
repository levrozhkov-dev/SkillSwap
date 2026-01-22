import React, { useState } from 'react';
import { Checkbox } from '../../../../shared/ui/checkbox/checkbox';
import type { CategoryCheckboxProps } from '../../../../shared/ui/checkbox/type';

export const CategoryCheckbox: React.FC<CategoryCheckboxProps> = ({
  categoryData,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const subIds = categoryData.subCategories.map((sub) => sub.id);

  const categoryChecked = Object.prototype.hasOwnProperty.call(
    selectedCategories,
    categoryData.id,
  );

  // вычисляем подкатегории
  const subChecked = subIds.map(
    (id) => selectedCategories[categoryData.id]?.includes(id) ?? false,
  );

  // клик по категории
  const handleCategoryClick = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (!categoryChecked) {
      // если категории еще нет в selectedCategories — создаем пустой массив
      setSelectedCategories({
        ...selectedCategories,
        [categoryData.id]: [],
      });
    } else if (categoryChecked && newIsOpen === false) {
      // если снимаем категорию то удаляем из стейта
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

    if (catSubs.length === 0) delete newSelected[categoryData.id];
    else newSelected[categoryData.id] = catSubs;

    setSelectedCategories(newSelected);
  };

  return (
    <div>
      <Checkbox
        label={categoryData.title}
        checked={categoryChecked}
        onChange={handleCategoryClick}
      />

      {isOpen && (
        <div style={{ marginLeft: '20px', marginTop: '10px' }}>
          {categoryData.subCategories.map((sub, index) => (
            <Checkbox
              key={sub.id}
              label={sub.name}
              checked={subChecked[index]}
              onChange={(checked) => handleSubChange(index, checked)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
