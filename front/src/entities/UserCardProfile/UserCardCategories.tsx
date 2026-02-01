import { useSelector } from "react-redux";
import type { CategorySelection, UserSkills } from "../../widgets/ListCard/types/user";
import type { RootState } from "../../providers/store/store";
import { getCanTeachCategories, getWantsToLearnCategories } from "../../shared/lib/categories-tags/CategoriesTagsUtils";
import * as Styled from "./UserCardProfile.styled";
import TagCategory from "../../shared/ui/tagCategory/TagCategory";

type UserCardCategoriesProps = {
  skills: UserSkills[];
  categories: CategorySelection[];
};

export const UserCardCategories = (props: UserCardCategoriesProps) => {
  const { skills, categories } = props;
  
  const allCategories = useSelector((state: RootState) => state.category.items);

  const canTeachItems = getCanTeachCategories(skills, allCategories);
  const wantsToLearnItems = getWantsToLearnCategories(categories, allCategories);

  // Ограничиваем до (maxItems: number) категорий и добавляем "+n" если больше
  const renderCategoryTags = (
    items: Array<{ name: string; color: string; id: string }>,
    // Опции отображения тегов
    options?: {
      truncateLimit?: number; // Ограничение по длине
      enableTooltip?: boolean; // Показывать тултип
    },
  ) => {
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
      <Styled.UserCardCategoryTags>
        {items.map((item) => (
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
      </Styled.UserCardCategoryTags>
    );
  };
  
  return (
    <Styled.UserCardCategories>
      <Styled.UserCardCategorySection>
        <Styled.UserCardCategoryTitle>Может научить:</Styled.UserCardCategoryTitle>
        {renderCategoryTags(canTeachItems)}
      </Styled.UserCardCategorySection>
      <Styled.UserCardCategorySection>
        <Styled.UserCardCategoryTitle>Хочет научиться:</Styled.UserCardCategoryTitle>
        {renderCategoryTags(wantsToLearnItems, {
          truncateLimit: 16,
          enableTooltip: true
           })}
      </Styled.UserCardCategorySection>
    </Styled.UserCardCategories>
  );
};

