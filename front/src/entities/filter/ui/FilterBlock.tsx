import {
  StyledFilterContainer,
  StyledFilterOptions,
  StyledFilterTitle,
} from './FilterBlock.styled';
import { RadioButton } from '../../../shared/ui/radioButton/RadioButton';
import type { FilterBlockProps } from '../../../widgets/Filter/ui/types';

export const FilterBlock: React.FC<FilterBlockProps> = ({
  title,
  name,
  options,
  state,
  setState,
}) => {
  const onChange = (value: string) => setState(value);

  const optionsProps = options.map((option) => ({
    text: option,
    name,
    value: option,
    checked: state === option,
    onChange,
  }));

  return (
    <StyledFilterContainer>
      <StyledFilterTitle>{title}</StyledFilterTitle>
      <StyledFilterOptions>
        {optionsProps.map((optionProps) => (
          <RadioButton key={optionProps.value} {...optionProps} />
        ))}
      </StyledFilterOptions>
    </StyledFilterContainer>
  );
};
