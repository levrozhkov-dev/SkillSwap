import { FilterBlock } from '../../../entities/filter';
import type { FilterComponentProps } from './types';
export function Filter({
  mockFilterLearn,
  mockFilterGender,
  dataFilter,
  setDataFilter,
}: FilterComponentProps) {
  return (
    <div>
      <FilterBlock
        {...mockFilterLearn}
        state={dataFilter.learn}
        setState={(val) => setDataFilter({ ...dataFilter, learn: val })}
      />
      <FilterBlock
        {...mockFilterGender}
        state={dataFilter.gender}
        setState={(val) => setDataFilter({ ...dataFilter, gender: val })}
      />
    </div>
  );
}
