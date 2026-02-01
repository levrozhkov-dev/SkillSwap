import React, { useMemo } from 'react';
import * as Styled from './listSkills.styled';
import { icons, DefaultIconComponent } from '../../shared/mock/icons/icons';
import { useSelector } from 'react-redux';
import type { RootState } from '../../providers/store/store';

interface ListSkillsProps {
  onSkillSelect: (value: string) => void;
}

export const ListSkills = (props: ListSkillsProps) => {
  const { onSkillSelect } = props;
  const categories = useSelector((state: RootState) => state.category.items);

  const groupedSkills = useMemo(() => {
    return categories.map((cat) => ({
      id: cat.id,
      title: cat.title,
      icon: cat.icon,
      color: cat.color,
      subCategories: cat.subCategories ?? [],
    }));
  }, [categories]);

  return (
    <Styled.Container>
      {groupedSkills.length === 0 ? (
        <Styled.SkillsEmpty role="menuitem" tabIndex={-1}>
          Нет категорий
        </Styled.SkillsEmpty>
      ) : (
        groupedSkills.map((category) => (
          <Styled.SkillsCategoryContainer key={category.id}>
            <Styled.SkillsCategoryIcon color={category.color}>
              {icons[category.icon as keyof typeof icons] ? (
                React.createElement(icons[category.icon as keyof typeof icons])
              ) : (
                <DefaultIconComponent />
              )}
            </Styled.SkillsCategoryIcon>
            <Styled.SkillsCategoryGroup>
              <Styled.SkillsCategory
                type="button"
                role="menuitem"
                onClick={() => onSkillSelect(category.title)}
              >
                {category.title}
              </Styled.SkillsCategory>
              {category.subCategories.map((sub) => (
                <Styled.SkillsSubCategories
                  key={sub.id}
                  type="button"
                  role="menuitem"
                  onClick={() => onSkillSelect(sub.name)}
                >
                  {sub.name}
                </Styled.SkillsSubCategories>
              ))}
            </Styled.SkillsCategoryGroup>
          </Styled.SkillsCategoryContainer>
        ))
      )}
    </Styled.Container>
  );
};
