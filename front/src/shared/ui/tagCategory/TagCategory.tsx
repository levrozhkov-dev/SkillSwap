import { StyledTagCategory } from './TagCategory.styled';

interface TagCategoryProps {
  color?: string;
  value: string;
  id: string;
  tooltip?: string;
}

const TagCategory: React.FC<TagCategoryProps> = ({
  color,
  value,
  id,
  tooltip,
}) => {
  return (
    <StyledTagCategory color={color} key={id} title={tooltip}>
      {value}
    </StyledTagCategory>
  );
};

export default TagCategory;
