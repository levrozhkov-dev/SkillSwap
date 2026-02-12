import { useSelector } from 'react-redux';
import type { RootState } from '../../../providers/store/store';
import TagCategory from '../../../shared/ui/tagCategory/TagCategory';
import * as Styled from './Card.styled';
import type {
  UserSkills,
  CategorySelection,
} from '../../../widgets/ListCard/types/user';
import { getCanTeachCategories, getWantsToLearnCategories } from '../../../shared/lib/categories-tags/CategoriesTagsUtils';

interface CardCategoriesProps {
  skills: UserSkills[];
  categories: CategorySelection[];
}

export const CardCategories = (props: CardCategoriesProps) => {
  const { skills, categories } = props;
  
  const allCategories = useSelector((state: RootState) => state.category.items);

  const canTeachItems = getCanTeachCategories(skills, allCategories);
  const wantsToLearnItems = getWantsToLearnCategories(categories, allCategories);

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
      <Styled.CategoryTags>
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
      </Styled.CategoryTags>
    );
  };

  return (
    <Styled.CardCategories>
      {canTeachItems.length > 0 && (
        <Styled.CategorySection>
          <Styled.CategoryTitle>Может научить:</Styled.CategoryTitle>
          {renderCategoryTags(canTeachItems)}
        </Styled.CategorySection>
      )}
      {/* Настройки отображения тегов:
        truncateLimit - ограничение по длине;
        enableTooltip - тултип. */}
      {wantsToLearnItems.length > 0 && (
        <Styled.CategorySection>
          <Styled.CategoryTitle>Хочет научиться:</Styled.CategoryTitle>
          {renderCategoryTags(wantsToLearnItems, 2, {
            truncateLimit: 16,
            enableTooltip: true,
          })}
        </Styled.CategorySection>
      )}
    </Styled.CardCategories>
  );
};
