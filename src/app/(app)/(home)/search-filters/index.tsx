import { Categories } from './categories';
import { SearchInput } from './search-input';

interface Props {
  data: unknown;
}

export const SearchFilters = ({ data }: Props) => {
  return (
    <div className='px-4 lg:px-12 py-8 border-b flex-col space-y-4 w-full'>
      <SearchInput />
      <Categories data={data} />
    </div>
  );
};
