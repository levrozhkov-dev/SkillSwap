import * as Styled from './TagCategory.styled';

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
    <Styled.TagCategory color={color} key={id} title={tooltip}>
      {value}
    </Styled.TagCategory>
  );
};

export default TagCategory;
