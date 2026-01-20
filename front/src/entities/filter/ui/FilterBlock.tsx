import { useEffect, useState } from "react";
import { StyledFilterContainer, StyledFilterOptions, StyledFilterTitle } from "./FilterBlock.styled";
import { RadioButton } from "../../../shared/ui/radioButton/RadioButton";

//типы для пропсов фильтра написаны с учетом что text и value у каждой кнопки совпадают
export interface FilterProps {
    title: string | null;
    type: 'radio' | 'checkbox';
    name: string;
    options: string[];
}

interface RadioButtonProps {
  text: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

//создаем универсальный компонент для любого блока из фильтров
export const FilterBlock: React.FC<FilterProps> = ({
  title,
  type,
  name,
  options
}) => { 
    //создаем состояние
    const [state, setState] = useState<string|null>(null);

    useEffect(() => {
        if (type === 'radio') {
            setState(options[0]);
        }
    },[])

    //логируем состояние фильтра для проверки работоспособности (убрать после отладки)
    useEffect(() => {
        console.log(state);
    }, [state])

    const onChange = (value: string) => {
        setState(value);
    }

    const optionsProps: RadioButtonProps[] = [];

    options.map((option, index) => {
        optionsProps[index] = {
            text: option,
            name: name,
            value: option,
            checked: (state === option),
            onChange: onChange
        }
    })

    return (
        <StyledFilterContainer>
            {/*контейнер для названия фильтра и опций*/}
            <StyledFilterTitle>{title}</StyledFilterTitle>
            <StyledFilterOptions>
                {optionsProps.map((optionProps) => (
                    <RadioButton {...optionProps} />
                ))}
            </StyledFilterOptions>

        </StyledFilterContainer>

    );
}