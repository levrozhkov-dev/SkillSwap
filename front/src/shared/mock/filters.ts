import type { FilterProps } from "../../entities/filter/ui/FilterBlock";

export const mockFilterLearn: FilterProps = {
    "title": null,
    "type": "radio",
    "name": "learn",
    "options": [
        "Всё",
        "Хочу научиться",
        "Могу научить"
    ]
};

export const mockFilterGender: FilterProps = {
    "title": "Пол автора",
    "type": "radio",
    "name": "gender",
    "options": [
        "Не имеет значения",
        "Мужской",
        "Женский"
    ]
};