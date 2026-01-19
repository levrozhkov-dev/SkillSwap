import { StyledTagCategory } from "./TagCategory.styled";

interface TagCategoryProps {
  color?: string;
  value: string;
  id: string;
}

const TagCategory: React.FC<TagCategoryProps> = ({ color, value, id }) => {
  return (
    <StyledTagCategory color={color} key={id}>
      {value}
    </StyledTagCategory>
  );
};

export default TagCategory;
