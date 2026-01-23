import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../providers/store/store';
import TagCategory from '../../../shared/ui/tagCategory/TagCategory';
import {
  StyledCardCategories,
  StyledCategorySection,
  StyledCategoryTitle,
  StyledCategoryTags,
} from './Card.styled';
import type {
  UserSkills,
  CategorySelection,
} from '../../../widgets/ListCard/types/user';

interface CardCategoriesProps {
  skills: UserSkills[];
  categories: CategorySelection[];
}

export const CardCategories: React.FC<CardCategoriesProps> = ({
  skills,
  categories,
}) => {
  const allCategories = useSelector((state: RootState) => state.category.items);

  // Категории "Может научить" из skills
  const getCanTeachCategories = () => {
    const canTeachItems: Array<{ name: string; color: string; id: string }> =
      [];

    skills.forEach((skill) => {
      const category = allCategories.find((cat) => cat.id === skill.category);
      if (category) {
        const subCategory = category.subCategories.find(
          (sub) => sub.id === skill.subcategory,
        );
        if (subCategory) {
          canTeachItems.push({
            name: subCategory.name,
            color: category.color,
            id: `can-teach-${skill.id}-${subCategory.id}`,
          });
        }
      }
    });

    return canTeachItems;
  };

  // Категории "Хочет научиться" из categories
  const getWantsToLearnCategories = () => {
    const wantsToLearnItems: Array<{
      name: string;
      color: string;
      id: string;
    }> = [];

    categories.forEach((categorySelection) => {
      const category = allCategories.find(
        (cat) => cat.id === categorySelection.idCategory,
      );
      if (category) {
        categorySelection.idSubCategory.forEach((subCategoryId) => {
          const subCategory = category.subCategories.find(
            (sub) => sub.id === subCategoryId,
          );
          if (subCategory) {
            wantsToLearnItems.push({
              name: subCategory.name,
              color: category.color,
              id: `wants-learn-${categorySelection.idCategory}-${subCategoryId}`,
            });
          }
        });
      }
    });

    return wantsToLearnItems;
  };

  const canTeachItems = getCanTeachCategories();
  const wantsToLearnItems = getWantsToLearnCategories();

  // Ограничиваем до (maxItems: number) категорий и добавляем "+n" если больше
  const renderCategoryTags = (
    items: Array<{ name: string; color: string; id: string }>,
    // Количество категорий по умолчанию
    maxItems: number = 2,
    // Опции отображения тегов
    options?: {
      truncateLimit?: number; // Ограничение по длине
      enableTooltip?: boolean; // Показывать тултип
    },
  ) => {
    const visibleItems = items.slice(0, maxItems);
    const remainingCount = Math.max(0, items.length - maxItems);

    const formatCategoryName = (name: string, maxLength?: number) => {
      if (!maxLength || name.length <= maxLength) {
        return { displayName: name, isTruncated: false };
      }

      return {
        displayName: `${name.slice(0, Math.max(0, maxLength - 3))}...`,
        isTruncated: true,
      };
    };

    return (
      <StyledCategoryTags>
        {visibleItems.map((item) => (
          <TagCategory
            key={item.id}
            id={item.id}
            {...(() => {
              const { displayName, isTruncated } = formatCategoryName(
                item.name,
                options?.truncateLimit,
              );

              return {
                value: displayName,
                tooltip:
                  options?.enableTooltip && isTruncated ? item.name : undefined,
              };
            })()}
            color={item.color}
          />
        ))}
        {remainingCount > 0 && (
          <TagCategory
            id={`remaining-${items[0]?.id}`}
            value={`+${remainingCount}`}
          />
        )}
      </StyledCategoryTags>
    );
  };

  return (
    <StyledCardCategories>
      {canTeachItems.length > 0 && (
        <StyledCategorySection>
          <StyledCategoryTitle>Может научить:</StyledCategoryTitle>
          {renderCategoryTags(canTeachItems)}
        </StyledCategorySection>
      )}
      {/* Настройки отображения тегов:
        truncateLimit - ограничение по длине;
        enableTooltip - тултип. */}
      {wantsToLearnItems.length > 0 && (
        <StyledCategorySection>
          <StyledCategoryTitle>Хочет научиться:</StyledCategoryTitle>
          {renderCategoryTags(wantsToLearnItems, 2, {
            truncateLimit: 16,
            enableTooltip: true,
          })}
        </StyledCategorySection>
      )}
    </StyledCardCategories>
  );
};
