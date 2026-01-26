import type { ICategory } from "../../../features/slice/categoriesSlice";
import type { CategorySelection, UserSkills } from "../../../widgets/ListCard/types/user";


//Метод формирует массив подкатегорий из skills (навыки, которым пользователь "Может научить")
  export const getCanTeachCategories = (skills: UserSkills[], allCategories: ICategory[]) => {
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

  //Метод формирует массив подкатегорий из categories (навыки, которым пользователь "Хочет научиться")
  export const getWantsToLearnCategories = (categories: CategorySelection[], allCategories: ICategory[]) => {
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

  