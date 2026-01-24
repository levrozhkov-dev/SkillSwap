import type { FilterData, FilterProps } from "../../widgets/Filter/ui/types"

export const mockInitialFiltersValue: FilterData = {
    gender: null,
    learn: null,
    categories: {},
    cities: []
}

export const mockFilterLearn: FilterProps = {
    "title": null,
    "type": "radio",
    "name": "learn",
    "options": [
        "Всё",
        "Хочу научиться",
        "Могу научить"
    ]
}

export const mockFilterGender: FilterProps = {
    "title": "Пол автора",
    "type": "radio",
    "name": "gender",
    "options": [
        "Не имеет значения",
        "Мужской",
        "Женский"
    ]
}