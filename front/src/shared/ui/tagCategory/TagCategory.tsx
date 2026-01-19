import { StyledTagCategory } from "./TagCategory.styled";

interface TagCategoryProps {
  color?: string;
  value: string;
}

const TagCategory: React.FC<TagCategoryProps> = ({ color, value = 'Рубрика'}) => {
  return (
    <StyledTagCategory color={color}>
      {value}
    </StyledTagCategory>
  );
};

export default TagCategory;
